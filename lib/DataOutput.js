'use strict';

const ModelType = require('./ModelType');

class DataOutput {
  constructor () {
    this.bytes = [];
  }

  // get bytes () {
  //   return this.bytes;
  // }

  // set bytes () {
  //   return this.bytes;
  // }

  writeByte (b) {
    this.bytes.push(b);
  }

  writeBytes (byteArray) {
    this.bytes.push(byteArray);
  }

  writeBool (b) {
    this.bytes.push(b ? 1 : 0);
  }

  writeNum (b, type) {
    switch (type) {
      case new ModelType().int():
        let list1 = new Int8Array(4);
        let dataview = new DataView(list1);
        dataview.setInt32(0, b);
        this.bytes.push(dataview.buffer);
        break;
      case new ModelType().long():
        let list2 = new Int8Array(8);
        let dataview2 = new DataView(list2);
        dataview2.setInt64(0, b);
        this.bytes.push(dataview2.buffer);
        break;
      case new ModelType().double():
        let list3 = new Int8Array(8);
        let dataview3 = new DataView(list3);
        dataview3.setFloat64(0, b);
        this.bytes.push(dataview3.buffer);
        break;
      case new ModelType().bigDecimal():
      case new ModelType().bigInteger():
        throw new TypeError('Decoding / encoding ModelType.BIG_INTEGER and ModelType.BIG_DECIMAL is not supported yet!');
    }
  }

  writeUtf (s) {
    const sBytes = [];
    for (let i = 0; i < s.length; i++) {
      let c = s.codeUnitAt(i);
      if (c > 0 && c <= 0x7f) {
        sBytes.push(c);
      } else if (c <= 0x07ff) {
        sBytes.push((0xc0 | 0x1f & c >> 6));
        sBytes.push((0x80 | 0x3f & c));
      } else {
        sBytes.push((0xe0 | 0x0f & c >> 12));
        sBytes.push((0x80 | 0x3f & c >> 6));
        sBytes.push((0x80 | 0x3f & c));
      }
    }

    let list = new Int8Array(2);
    let dataview = new DataView(list);
    dataview.setInt16(0, sBytes.length);
    this.bytes.push(dataview.buffer);
    this.writeBytes(sBytes);
  }

}

module.exports = DataOutput;

'use strict';

const ModelValue = require('./ModelValue');
const DataOutput = require('./DataOutput');

class BooleanValue extends ModelValue {

  constructor (value) {
    super(value);
    this.value = value;
  }

  asNum () {
    return this.value ? 1 : 0;
  }

  asBool () {
    return this.value;
  }

  asString () {
    return 'todo';
  }

  asBytes () {
    return this.value ? [1] : [0];
  }

  writeExternal () {
    new DataOutput().writeBool(this.value);
  }

}

module.exports = BooleanValue;

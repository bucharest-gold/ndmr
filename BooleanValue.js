'use strict';

const ModelValue = require('./ModelValue');

class BooleanValue extends ModelValue {

  constructor (value) {
    super(value);
    this.value = value;
  }

  asNum() {
    return this.value ? 1 : 0;
  }

  asBool() {
    return this.value;
  }

  asString() {
    return 'todo';
  }

  asBytes() {
    return this.value ? [1] : [0];
  }

}

let b = new BooleanValue(true);
console.log(b.modelType);

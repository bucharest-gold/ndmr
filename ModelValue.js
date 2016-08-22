'use strict';

const ModelType = require('./ModelType');

class ModelValue {

  constructor (ModelType) {
    if (this.constructor === ModelValue) {
      throw TypeError('Cannot instantiate ModelValue class.');
    }
    this.ModelType = ModelType;
  }

  get modelType() {
    return this.ModelType;
  }

  modelTypeBoolean() {
    return new ModelType().booleanX();
  }

  asNum () {
    throw new TypeError('asNum() is not supported in ModelValue');
  }

  asBool () {
    throw new TypeError('asBool() is not supported in ModelValue');
  }

  asString () {
    throw new TypeError('asString() is not supported in ModelValue');
  }

  asBytes () {
    throw new TypeError('asBytes() is not supported in ModelValue');
  }

  asProperty () {
    throw new TypeError('asProperty() is not supported in ModelValue');
  }

  asPropertyList () {
    throw new TypeError('asPropertyList() is not supported in ModelValue');
  }

  asObject () {
    throw new TypeError('asObject() is not supported in ModelValue');
  }

  asList () {
    throw new TypeError('asList() is not supported in ModelValue');
  }

  asType () {
    throw new TypeError('asType() is not supported in ModelValue');
  }

  add () {
    throw new TypeError('add() is not supported in ModelValue');
  }

  remove () {
    throw new TypeError('remove() is not supported in ModelValue');
  }

  keys () {
    throw new TypeError('keys() is not supported in ModelValue');
  }

}

module.exports = ModelValue;

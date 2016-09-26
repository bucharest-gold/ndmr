'use strict';

class ModelType {

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }

  bigDecimal () {
    return new ModelType('d', 'BIG_DECIMAL');
  }

  bigInteger () {
    return new ModelType('i', 'BIG_INTEGER');
  }

  booleanType () {
    return new ModelType('Z', 'BOOLEAN');
  }

  bytes () {
    return new ModelType('b', 'BYTES');
  }

  double () {
    return new ModelType('D', 'DOUBLE');
  }

  expression () {
    return new ModelType('e', 'EXPRESSION');
  }

  int () {
    return new ModelType('I', 'INT');
  }

  list () {
    return new ModelType('l', 'LIST');
  }

  long () {
    return new ModelType('J', 'LONG');
  }

  objectType () {
    return new ModelType('o', 'OBJECT');
  }

  property () {
    return new ModelType('p', 'PROPERTY');
  }

  stringType () {
    return new ModelType('s', 'STRING');
  }

  type () {
    return new ModelType('t', 'TYPE');
  }

  undefinedType () {
    return new ModelType('u', 'UNDEFINED');
  }

  factoryModelType (type) {
    switch (type) {
      case 'd':
        return this.bigDecimal();
      case 'i':
        return this.bigInteger();
      case 'Z':
        return this.booleanType();
      case 'b':
        return this.bytes();
      case 'D':
        return this.double();
      case 'e':
        return this.expression();
      case 'I':
        return this.int();
      case 'l':
        return this.list();
      case 'J':
        return this.long();
      case 'o':
        return this.objectType();
      case 'p':
        return this.property();
      case 's':
        return this.stringType();
      case 't':
        return type();
      default:
        return this.undefinedType();
    }
  }

}

module.exports = ModelType;

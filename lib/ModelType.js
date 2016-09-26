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

  booleanX () {
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

  objectX () {
    return new ModelType('o', 'OBJECT');
  }

  property () {
    return new ModelType('p', 'PROPERTY');
  }

  // TODO : replace with a better suffix instead 'X'.
  stringX () {
    return new ModelType('s', 'STRING');
  }

  type () {
    return new ModelType('t', 'TYPE');
  }

  undefinedX () {
    return new ModelType('u', 'UNDEFINED');
  }

  factoryModelType (type) {
    switch (type) {
      case 'd':
        return this.bigDecimal();
      case 'i':
        return this.bigInteger();
      case 'Z':
        return this.booleanX();
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
        return this.objectX();
      case 'p':
        return this.property();
      case 's':
        return this.stringX();
      case 't':
        return type();
      default:
        return this.undefinedX();
    }
  }

}

module.exports = ModelType;

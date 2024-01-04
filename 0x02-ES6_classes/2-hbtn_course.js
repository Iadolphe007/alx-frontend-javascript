export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNumber(length, 'length');
    this._students = this._validateArrayOfStrings(students, 'students');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._validateNumber(value, 'length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._validateArrayOfStrings(value, 'students');
  }

  // eslint-disable-next-line class-methods-use-this
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string.`);
      return undefined;
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number.`);
      // return undefined;
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _validateArrayOfStrings(value, attributeName) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${attributeName} must be an array of strings.`);
      // return undefined;
    }
    return value;
  }
}

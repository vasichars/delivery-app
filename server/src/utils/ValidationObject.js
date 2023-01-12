import ajv from '../startup/ajv.js';

class ValidationObject {
  constructor(properties) {
    this.params = ajv.compile(properties.params || {});
    this.query = ajv.compile(properties.query || {});
    this.body = ajv.compile(properties.body || {});
  }
}

export default ValidationObject;

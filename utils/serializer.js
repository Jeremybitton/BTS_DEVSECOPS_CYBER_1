const serialize = require('serialize-javascript');

function unsafeSerialize(obj) {
  return serialize(obj, { unsafe: false });
}

module.exports = { unsafeSerialize };

const serialize = require('serialize-javascript');

function safeSerialize(obj) {
  return serialize(obj, );//{ unsafe: true }
}

module.exports = { safeSerialize };

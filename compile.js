'use strict';

var jade = require('jade');
var resolve = require('resolve');

function P() {
  jade.Parser.apply(this, arguments);
}

P.prototype = Object.create(jade.Parser.prototype);
P.prototype.constructor = P;

P.prototype.resolvePath = function (path, purpose) {
  if (path[0] === '.') {
    return jade.Parser.prototype.resolvePath.apply(this, arguments);
  }
  return resolve.sync(path, {
    extensions: ['.jade'],
  });
};

console.log(jade.renderFile('./index.jade', {
  parser: P,
}));

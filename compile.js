'use strict';

var jade = require('jade');
var resolve = require('resolve');

function P() {
  jade.Parser.apply(this, arguments);
}

P.prototype = Object.create(jade.Parser.prototype);
P.prototype.constructor = P;

P.prototype.resolvePath = function (path, purpose) {
  return resolve.sync(path, {
    extensions: ['.jade'],
  });
  return jade.Parser.prototype.resolvePath.apply(this, arguments);
};

console.log(jade.renderFile('./index.jade', {
  parser: P,
}));

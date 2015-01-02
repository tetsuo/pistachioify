var pistachio = require('pistachio-compiler');
var through = require('through');

module.exports = function (file) {
  if (!/\.(coffee)$/.test(file)) return through();
  var src = '';
  return through (write, end);
  function write (buf) {
    src += buf;
  }
  function end () {
    this.queue(pistachio(src).toString());
    this.queue(null);
  }
};

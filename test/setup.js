require('babel-polyfill');

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.window.localStorage = require('localStorage');
global.navigator = global.window.navigator;
global.self = global.window; // https://github.com/webpack-contrib/style-loader/issues/177

(function() {
  var lastTime = 0;
  if (!global.requestAnimationFrame)
    global.requestAnimationFrame = function(callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!global.cancelAnimationFrame)
    global.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());

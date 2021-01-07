"use strict";

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function fireVar(bool) {
  if (bool) {
    var foo = 'bar';
    console.log(foo); //bar
  } else {
    console.log(foo); //undefined
  }
}

fireVar(false); ///////////////////////////////

function fireLet(bool) {
  if (bool) {
    var _foo = 'bar';
    console.log(_foo); //bar
  } else {
    console.log(foo); //ERROR!!!
  }
}

fireLet(false); ///////////////////////////////

var names = ['John', 'Susan'];
names.push('Sandy'); //['John', 'Susan', 'Sandy']

names = (_readOnlyError("names"), ['Tim', 'Carol']); //ERROR!!!
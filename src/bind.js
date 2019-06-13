"use strict";

Function.prototype.myBind = function (scope) {
  scope._this = this;
  let args = Array.prototype.slice.call(arguments, 1);
  return function () {
    scope._this(...args) // use explode or use apply.
  }
}

Function.prototype.myCall = function (scope) {
  let args = Array.prototype.slice.call(arguments, 1);
  scope._this = this;
  scope._this(...args);
}

Function.prototype.myApply = function (scope) {
  let args = arguments[1];
  scope._this = this;
  scope._this(...args);
}

let xyz = {
  a: 1,
  b: 2
}

function abc(a, b, c) {
  console.log(this.a, this.b, a, b, c)
}

let test = abc.myBind(xyz, 1, 2, 3)
test();

abc.myCall(xyz, 1, 2, 3)


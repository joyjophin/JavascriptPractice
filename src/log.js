console.mylog = function () {
  let args = Array.prototype.slice.call(arguments)
  args.unshift("(app)")
  console.log.apply({}, args);
}


console.mylog("what", "the", "fuck", "?")

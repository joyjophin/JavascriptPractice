class MyPromise {
  constructor(executor) {
    this.state = "PENDING"
    this.chained = []

    const resolve = res => {
      console.log("yeah 1");
      if (this.state !== "PENDING") {
        return
      }

      this.state = "FULFILLED";
      this.internalValue = res;

      console.log(this.chained)
      for (let { onResolve } of this.chained) {
        onResolve(res)
      }
    };

    const reject = err => {
      if (this.state !== "PENDING") {
        return
      }

      this.state = "REJECTED";
      this.internalValue = err;
      for (let { onRejected } in this.chained) {
        onRejected(err)
      }
    };

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onResolve, onRejected) {
    console.log("yeah");
    if (this.state === "FULFILLED") {
      onResolve(this.internalValue)
    } else if (this.state === "REJECTED") {
      onRejected(this.internalValue)
    } else {
      this.chained.push({onResolve, onRejected})
    }
  }
}

let test = new MyPromise(function (resolve) {
  setTimeout(function () {
    resolve(10);
  }, 1000)
}).then(function (res) {
  console.log(res)
})
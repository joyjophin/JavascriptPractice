function looper() {
  for (var i = 0; i < 10; i++) {
    function timed(j) {
      setTimeout(() => {
        console.log(j)
      }, 1000);
    }
    timed(i);
  }
}

looper();
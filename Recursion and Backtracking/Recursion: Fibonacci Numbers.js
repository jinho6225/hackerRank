function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    let cache = {}
    return (function fib(n) {
        if (cache[n]) {
            return cache[n]
        } else {
            if (n === 0) {
                cache[n] = 0
                return cache[n]
            }
            if (n === 1) {
                cache[n] = 1
                return cache[n]
            }
            if (n >= 2) {
                cache[n] = fib(n-2) + fib(n-1)
                return cache[n]
            }
        }
    })(n)
}

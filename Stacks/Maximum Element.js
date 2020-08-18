function processData(input) {
    let arr = input.split('\n')
    let stack = []
    arr = arr.slice(1)
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(' ')) {
            array.push(arr[i].split(' '))
        } else {
            array.push(Number(arr[i]))
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] === 2) {
                stack.pop()
            } else if (array[i] === 3) {
                if (stack.length > 0) {
                    console.log(Math.max(...stack))
                }
            }
        } else {
            stack.push(Number(array[i][1]))
        }
    }
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

function insertionSort2(n, arr) {
    let i = 0
    while (i < n-1) {
        if(arr[i] > arr[i+1]) {
            let temp = arr[i+1]
            arr[i+1] = arr[i]
            let j = i //4//3//2//1
            if (i-1 >= 0 && temp < arr[i-1]) {
                while (temp < arr[j-1] && j >= 0) {
                    arr[j] = arr[j-1]
                    if (j > 0) {
                        j-- //3//2//1
                    }
                }
            }
            arr[j] = temp
        }
        i++
        console.log(arr.join(' '))
    }
}
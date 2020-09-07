function insertionSort1(n, arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) { //i - 4
            let j = i - 1 // j = 3
            let temp = arr[i] //temp = 3
            while (j >= 0) { // 2, 4, 6, 8, 3
                arr[j+1] = arr[j] //  2, 3, 4, 6, 8
                console.log(arr.join(' '))
                j-- //j = 2 / 1 / 0
                if (temp > arr[j]) {
                    arr[j+1] = temp
                    break;
                }
                
            }
            arr[j+1] = temp
        }
    }
    console.log(arr.join(' '))
}
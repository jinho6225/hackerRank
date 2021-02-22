let arr: number[][] = [ 
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 0, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0 ] ]

function maxSumOfHourglasses(arr: number[][]): number {
    let max: number | null = null
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = 0; j < arr[i].length-2; j++) {
            let sum = helper(arr, i, j)
            if (max === 0) {
                max = sum
            }
            if (sum > max) {
                max = sum
            }
        }
    }
    return max
}

function helper(arr, i , j): number{
    let total = 0;
    total += arr[i][j]
    total += arr[i][j+1]
    total += arr[i][j+2]
    total += arr[i+1][j+1]
    total += arr[i+2][j]
    total += arr[i+2][j+1]
    total += arr[i+2][j+2]
    return total
}


maxSumOfHourglasses(arr)
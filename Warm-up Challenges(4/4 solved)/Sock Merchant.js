/*Sock Merchant
complete the sockMerchant function below.
*/

function sockMerchant(n, ar) {
  let map = {}
  for (let i = 0; i < ar.length; i++) {
    if (!map[ar[i]]) {
      map[ar[i]] = 1
    } else {
      map[ar[i]] += 1
    }
  }
  let total = 0;
  for (let key in map) {
    if (map[key] / 2 > 0) {
      total = total + Math.floor(map[key]/2)
    }
  }
  return total
}

var n = 9
var arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output
// 3
sockMerchant(n, arr)

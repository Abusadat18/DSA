let arr = [3, 2, 1, 13, 8, 5, 0, 1];
let ans = mergeSort(arr, 0, arr.length - 1);
console.log(ans);

function mergeSort(arr, s, e) {
  if (s >= e) {
    return [arr[s]];
  }
  let mid = Math.floor((s + e) / 2);
  let arr1 = mergeSort(arr, s, mid);
  let arr2 = mergeSort(arr, mid + 1, e);
  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    temp.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    temp.push(arr2[j]);
    j++;
  }
  return temp;
}

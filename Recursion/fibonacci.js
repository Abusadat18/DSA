/* ITERATIVE APPROACH */

/* function fibs(n) {
  let first = 0;
  let second = 1;
  for (let i = 0; i < n; i++) {
    console.log(first);
    let temp = first + second;
    first = second;
    second = temp;
  }
}

fibs(8); */

function fibsRec(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  }
  return fibsRec(n - 1) + fibsRec(n - 2);
}

const ans = fibsRec(8);
console.log(ans);

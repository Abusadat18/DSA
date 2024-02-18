import { Tree } from "./balanceBST.mjs";

function getRandomNo() {
  return Math.floor(Math.random() * 100);
}

function getArr(size) {
  let arr = Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = getRandomNo();
  }
  return arr;
}

const tree = Tree(getArr(8));
tree.prettyPrint();

console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inorder());
console.log(tree.postOrder());
console.log(tree.preOrder());

tree.insert(getRandomNo());
tree.insert(getRandomNo());
tree.insert(getRandomNo());
tree.insert(getRandomNo());

console.log(tree.isBalanced());

tree.rebalance();

console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inorder());
console.log(tree.postOrder());
console.log(tree.preOrder());

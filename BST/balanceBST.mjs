import { mergeSort } from "../Recursion/mergeSort.mjs";

function Node(data) {
  return {
    data,
    left: null,
    right: null,
  };
}

function Tree(array) {
  let modifiedArr = mergeSort(array, 0, array.length - 1); /* Sorting it */
  modifiedArr = removeDuplicate(modifiedArr); /* Removing duplicates */

  let root = buildTree(modifiedArr, 0, modifiedArr.length - 1);

  function buildTree(arr, start, end) {
    if (start > end) {
      return null;
    }
    let mid = Math.trunc((start + end) / 2);
    let rootNode = Node(arr[mid]);
    rootNode.left = buildTree(arr, start, mid - 1);
    rootNode.right = buildTree(arr, mid + 1, end);

    return rootNode;
  }

  function insert(value, rootNode = root) {
    let temp = rootNode;

    if (temp === null) {
      return Node(value);
    }
    if (temp.data > value) {
      temp.left = insert(value, temp.left);
    } else {
      temp.right = insert(value, temp.right);
    }
    return temp;
  }

  return { root, insert };
}

function removeDuplicate(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

/* let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; */
let arr = [1, 2, 3, 4, 9, 11, 20];
let tree = Tree(arr);
tree.insert(10);
tree.insert(12);

prettyPrint(tree.root);

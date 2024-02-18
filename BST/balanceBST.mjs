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
    if (rootNode === null) {
      return Node(value);
    }

    if (rootNode.data > value) {
      rootNode.left = insert(value, rootNode.left);
    } else {
      rootNode.right = insert(value, rootNode.right);
    }
    return rootNode;
  }

  function deletee(value, rootNode = root) {
    /* BASE CASE */
    if (rootNode === null) {
      return rootNode;
    }

    /* RECURSIVE CASE */
    if (rootNode.data > value) {
      rootNode.left = deletee(value, rootNode.left);
    } else if (rootNode.data < value) {
      rootNode.right = deletee(value, rootNode.right);
    }

    /* IF ZERO CHILD */
    if (rootNode.data === value && !rootNode.left && !rootNode.right) {
      return null;
    }

    /* IF ONE CHILD EXIST */
    if (rootNode.data === value && !rootNode.left && rootNode.right) {
      return rootNode.right;
    } else if (rootNode.data === value && rootNode.left && !rootNode.right) {
      return rootNode.left;
    }

    /* IF BOTH CHILD EXISTS */
    if (rootNode.data === value && rootNode.left && rootNode.right) {
      let succ = rootNode.right;
      while (succ.left) {
        succ = succ.left;
      }
      deletee(succ.data);
      rootNode.data = succ.data;
    }
    return rootNode;
  }

  function find(value, rootNode = root) {
    if (rootNode === null) {
      return null;
    }

    if (rootNode.data > value) {
      return find(value, rootNode.left);
    } else if (rootNode.data < value) {
      return find(value, rootNode.right);
    } else {
      return rootNode;
    }
  }

  return { root, insert, deletee, find };
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
tree.deletee(11);
console.log(tree.find(12));

prettyPrint(tree.root);

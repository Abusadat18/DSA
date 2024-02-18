import { mergeSort } from "../Recursion/mergeSort.mjs";

function Node(data) {
  return {
    data,
    left: null,
    right: null,
  };
}

export function Tree(array) {
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

  function levelOrder() {
    let arr = [root];
    let orderArr = [];
    while (arr.length) {
      if (arr[0] === null) {
        arr.shift();
      } else {
        orderArr.push(arr[0].data);
        arr.push(arr[0].left);
        arr.push(arr[0].right);
        arr.shift();
      }
    }
    return orderArr;
  }

  function inorder(arr = [], node = root) {
    if (node === null) {
      return;
    }

    inorder(arr, node.left);
    arr.push(node.data);
    inorder(arr, node.right);
    return arr;
  }

  function preOrder(arr = [], node = root) {
    if (node === null) {
      return;
    }

    arr.push(node.data);
    preOrder(arr, node.left);
    preOrder(arr, node.right);
    return arr;
  }

  function postOrder(arr = [], node = root) {
    if (node === null) {
      return;
    }

    postOrder(arr, node.left);
    postOrder(arr, node.right);
    arr.push(node.data);
    return arr;
  }

  function height(node) {
    if (node === null) {
      return -1;
    }

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  function depth(node, rootNode = root) {
    if (rootNode === node) {
      return 0;
    }

    if (node.data > rootNode.data) {
      return depth(node, rootNode.right) + 1;
    } else {
      return depth(node, rootNode.left) + 1;
    }
  }

  function isBalanced(node = root) {
    if (node === null) {
      return true;
    }

    let lh = height(node.left);
    let rh = height(node.right);

    if (
      Math.abs(lh - rh) <= 1 &&
      isBalanced(node.left) &&
      isBalanced(node.right)
    ) {
      return true;
    }

    return false;
  }

  function rebalance() {
    let newArr = removeDuplicate(inorder());
    root = buildTree(newArr, 0, newArr.length - 1);
  }

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
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

  return {
    insert,
    deletee,
    find,
    levelOrder,
    inorder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
    prettyPrint,
  };
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

/* let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]; */

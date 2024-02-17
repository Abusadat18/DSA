function Node(key, value) {
  let next = null;
  return { key, value, next };
}

export function LinkedList() {
  let head = null;
  let tail = null;

  /* Append at end */
  function append(key, value) {
    let temp = Node(key, value);
    if (!head) {
      tail = temp;
      head = temp;
    } else {
      tail.next = temp;
      tail = temp;
    }
  }

  function prepend(key, value) {
    let temp = Node(key, value);
    if (!head && !tail) {
      tail = temp;
      head = temp;
    } else {
      temp.next = head;
      head = temp;
    }
  }

  function size() {
    let temp = head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function at(index) {
    const length = size();
    let temp = head;
    for (let i = 0; i < length; i++) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
    }
  }

  function indexOf(key) {
    const length = size();
    let temp = head;
    for (let i = 0; i < length; i++) {
      if (temp.key === key) {
        return i;
      }
      temp = temp.next;
    }
  }

  function pop() {
    const length = size();
    if (length === 1) {
      head = null;
    } else {
      let temp = at(length - 2);
      tail = temp;
      temp.next = null;
    }
  }

  function contains(key) {
    let temp = head;
    while (temp) {
      if (temp.key === key) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  function find(key) {
    let temp = head;
    while (temp) {
      if (temp.key === key) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  function removeAt(index) {
    if (index === 0) {
      head = head.next;
    } else {
      let previousNode = at(index - 1);
      let nodeToRemove = previousNode.next;
      let nextNode = nodeToRemove.next;
      previousNode.next = nextNode;
    }
  }

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    indexOf,
    pop,
    contains,
    find,
    removeAt,
  };
}

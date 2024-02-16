function Node(value) {
  let next = null;
  return { value, next };
}

function LinkedList() {
  let head = null;
  let tail = null;

  /* Append at end */
  function append(value) {
    let temp = Node(value);
    if (!head) {
      tail = temp;
      head = temp;
    } else {
      tail.next = temp;
      tail = temp;
    }
  }

  function prepend(value) {
    let temp = Node(value);
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

  function contains(value) {
    let temp = head;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  function find(value) {
    let temp = head;
    while (temp) {
      if (temp.value === value) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  function toString() {
    let temp = head;
    if (!temp) {
      return "Linked List is empty";
    }
    let output = "";
    while (temp) {
      output += `${temp.value}-->`;
      temp = temp.next;
    }
    output += "null";
    return output;
  }

  function insertAt(value, index) {
    if (index === 0) {
      prepend(value);
    } else {
      let previousNode = at(index - 1);
      let nextNode = previousNode.next;
      let newNode = Node(value);
      previousNode.next = newNode;
      newNode.next = nextNode;
    }
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
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const a = LinkedList(); /* EMPTY LINKED LIST */
a.append(10);
a.append(20);
a.prepend(5);
a.append(30);
a.append(35);
a.append(40);
a.append(50);
console.log(a.size());
console.log(a.at(3));
a.insertAt(80, 2);
a.removeAt(0);
a.removeAt(3);
a.removeAt(a.size() - 1);
a.insertAt(100, a.size() - 1);
a.insertAt(120, 0);
const output = a.toString();
console.log(output);

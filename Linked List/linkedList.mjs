function Node(value) {
  let next = null;
  return { value, next };
}

export function LinkedList() {
  let head = null;
  let tail = null;

  /* Append at end */
  function append(value) {
    let temp = Node(value);

    if (!this.head && !this.tail) {
      this.tail = temp;
      this.head = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
    }
  }

  function prepend(value) {
    let temp = Node(value);
    if (!this.head && !this.tail) {
      this.tail = temp;
      this.head = temp;
    } else {
      temp.next = this.head;
      this.head = temp;
    }
  }

  function size() {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  function getHead() {
    return this.head;
  }

  function getTail() {
    return this.tail;
  }

  function at(index) {
    const size = this.size();
    let temp = this.head;
    for (let i = 0; i < size; i++) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
    }
  }

  function pop() {
    const size = this.size();
    let temp = this.at(size - 2);
    this.tail = temp;
    temp.next = null;
  }

  function contains(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  function find(value) {
    let temp = this.head;
    while (temp) {
      if (temp.value === value) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  function toString() {
    let temp = this.head;
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
      this.prepend(value);
    } else {
      let previousNode = this.at(index - 1);
      let nextNode = previousNode.next;
      let newNode = Node(value);
      previousNode.next = newNode;
      newNode.next = nextNode;
    }
  }

  function removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previousNode = this.at(index - 1);
      let nodeToRemove = previousNode.next;
      let nextNode = nodeToRemove.next;
      previousNode.next = nextNode;
    }
  }

  return {
    head,
    tail,
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
a.prepend(15);
a.append(35);
a.pop();
a.insertAt(80, 2);
a.insertAt(90, 0);
a.insertAt(100, 6);
a.removeAt(0);

const output = a.toString();
console.log(output);

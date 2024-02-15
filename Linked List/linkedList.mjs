function Node(value) {
  let next = null;
  return { value, next };
}

function LinkedList(value) {
  let head = Node(value);
  let tail = head;

  /* Append at end */
  function append(value) {
    let temp = Node(value);
    this.tail.next = temp;
    this.tail = temp;
  }

  function prepend(value) {
    let temp = Node(value);
    temp.next = this.head;
    this.head = temp;
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
  };
}

let a = LinkedList(10);
a.append(20);
a.append(30);
a.append(40);
a.append(50);
a.pop();
const str = a.toString();
console.log(str);

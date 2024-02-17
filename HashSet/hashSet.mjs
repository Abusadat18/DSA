import { LinkedList } from "./modifiedLinkedList.mjs";

function hashMap() {
  let storage = new Array(16).fill(0);
  let capacity = 0;
  let loadFactor = 0.75;

  storage.forEach((item, index) => {
    storage[index] = LinkedList();
  });

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % storage.length;
    }
    return hashCode;
  }

  function set(key) {
    const hashCode = hash(key);
    let bucket = storage[hashCode];
    let node = bucket.find(key);
    if (node == null || node.key != key) {
      bucket.append(key);
    }
    //CHECKING SIZE OF STORAGE WITH LOAD FACTOR
    capacity = length();
    let storageSize = storage.length;
    if (loadFactor * storageSize <= capacity) {
      const temp = Array(storageSize * 2).fill(0);
      temp.forEach((bucket, index) => {
        temp[index] = LinkedList();
      });
      storage.forEach((bucket, index) => {
        temp[index] = storage[index];
      });
      storage = temp;
    }
  }

  function get(key) {
    let hashCode = hash(key);
    let bucket = storage[hashCode];
    let containsKey = bucket.find(key);
    if (containsKey) {
      return containsKey.key;
    } else {
      return null;
    }
  }

  function has(key) {
    let hashCode = hash(key);
    let bucket = storage[hashCode];
    let contains = bucket.contains(key);
    return contains;
  }

  function remove(key) {
    const hashCode = hash(key);
    let bucket = storage[hashCode];
    let node = bucket.find(key);
    if (node) {
      let nodeIndex = bucket.indexOf(key);
      bucket.removeAt(nodeIndex);
      return true;
    } else {
      return false;
    }
  }

  function length() {
    let count = 0;
    storage.forEach((bucket) => {
      const bucketSize = bucket.size();
      if (bucketSize) {
        count += bucketSize;
      }
    });
    return count;
  }

  function clear() {
    storage.forEach((item, index) => {
      storage[index] = LinkedList();
    });
  }

  function keys() {
    let keyArray = [];
    storage.forEach((bucket) => {
      let temp = bucket.getHead();
      while (temp) {
        keyArray.push(temp.key);
        temp = temp.next;
      }
    });
    return keyArray;
  }

  return { set, get, has, remove, length, clear, keys };
}

let a = hashMap();
a.set("Arman");
a.set("Binish");
a.set("Taseen");
a.set("Abdullah");
a.set("Fuzail");
a.set("Danish");
a.set("Faizan");
a.set("Arman");
a.set("Arman");

console.log(a.get("Faizan"));
console.log(a.length());

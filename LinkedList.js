class Node {
  value = null;
  next = null;
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `(${this.value})`;
  }
}

class LinkedList {
  #head;
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.#head === null) {
      this.#head = node;
    }
    if (this.#tail !== null) {
      this.#tail.next = node;
    }
    this.#tail = node;
    this.#size++;
  }

  prepend(value) {
    const node = new Node(value, this.#head);
    this.#head = node;
    if (this.#tail === null) {
      this.#tail = node;
    }
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  at(index) {
    let count = 0;
    let current = this.#head;
    while (count <= index && current !== null) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.next;
    }
    throw new Error(`Index ${index} is out of bounds`);
  }

  pop() {
    let current = this.#head;
    if (current === null) {
      throw new Error("Cannot pop empty list");
    }
    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    }
    while (current.next !== this.#tail) {
      current = current.next;
    }

    current.next = null;
    this.#tail = current;
    this.#size--;
  }

  contains(value) {
    let current = this.#head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.#head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.#head;
    let string = "";
    while (current !== null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }

    string += "null";
    return string;
  }

  insertAt(value, index) {
    const node = new Node(value);
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }

    let current = this.#head;
    let count = 0;
    while (current !== null) {
      if (count === index - 1) {
        node.next = current.next;
        current.next = node;
        this.#size++;
        return;
      }
      current = current.next;
      count++;
    }
    throw new Error("Insertion out of bounds");
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Removing outside bounds");
    }

    if (this.size() === 1) {
      this.#head = null;
      this.#tail = null;
      this.#size = 0;
      return;
    }

    if (index === 0) {
      this.#head = this.#head.next;
      this.#size--;
      return;
    }

    if (index === this.#size - 1) {
      const beforeLast = this.at(index - 1);
      beforeLast.next = null;
      this.#tail = beforeLast;
      this.size--;
      return;
    }

    const prev = this.at(index - 1);
    prev.next = prev.next.next;
    this.#size--;
  }
}

export { LinkedList };

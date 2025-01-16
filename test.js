import { LinkedList } from "./LinkedList.js";
import assert from "node:assert/strict";
class LinkedListTest {
  constructor() {
    this.linkedList = null;
  }

  setUp() {
    this.linkedList = new LinkedList();
  }

  runTests() {
    console.log("Running tests...");

    this.runTest(this.testAppend);
    this.runTest(this.testPrepend);
    this.runTest(this.testSize);
    this.runTest(this.testHead);
    this.runTest(this.testTail);
    this.runTest(this.testAt);
    this.runTest(this.testPop);
    this.runTest(this.testContains);
    this.runTest(this.testFind);
    this.runTest(this.testToString);
    this.runTest(this.testInsert);
    this.runTest(this.testRemove);

    console.log("All tests passed!");
  }

  runTest(testMethod) {
    this.setUp();
    testMethod.call(this);
  }

  testAppend() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.size(), 2);
    assert.strictEqual(this.linkedList.tail().value, 20);
  }

  testPrepend() {
    this.linkedList.prepend(10);
    this.linkedList.prepend(20);
    assert.strictEqual(this.linkedList.size(), 2);
    assert.strictEqual(this.linkedList.head().value, 20);
  }

  testSize() {
    assert.strictEqual(this.linkedList.size(), 0);
    this.linkedList.append(10);
    assert.strictEqual(this.linkedList.size(), 1);
  }

  testHead() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.head().value, 10);
  }

  testTail() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.tail().value, 20);
  }

  testAt() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    this.linkedList.append(30);
    assert.strictEqual(this.linkedList.at(1).value, 20);
    assert.throws(() => this.linkedList.at(99));
    assert.throws(() => this.linkedList.at(-1));
  }

  testPop() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    this.linkedList.pop();
    assert.strictEqual(this.linkedList.size(), 1);
    assert.strictEqual(this.linkedList.tail().value, 10);
    assert.throws(() => {
      this.linkedList.pop();
      this.linkedList.pop();
      this.linkedList.pop();
    }, "empty list popped");
  }

  testContains() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.contains(10), true);
    assert.strictEqual(this.linkedList.contains(30), false);
  }

  testFind() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.find(20), 1);
    assert.strictEqual(this.linkedList.find(30), null);
  }

  testToString() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    assert.strictEqual(this.linkedList.toString(), "( 10 ) -> ( 20 ) -> null");
  }

  testInsert() {
    this.linkedList.append(10);
    this.linkedList.append(20);
    this.linkedList.insertAt(5, 0);
    assert.strictEqual(this.linkedList.at(0).value, 5);
    assert.strictEqual(this.linkedList.size(), 3);

    this.linkedList.insertAt(35, 3);
    assert.strictEqual(this.linkedList.tail().value, 35);

    this.linkedList.insertAt(15, 2);
    assert.strictEqual(this.linkedList.at(2).value, 15);

    assert.throws(() => this.linkedList.insertAt(99));

    assert.strictEqual(this.linkedList.size(), 5);
  }
  testRemove() {
    this.linkedList.append(10);
    this.linkedList.append(20);

    this.linkedList.removeAt(0);
    assert.strictEqual(this.linkedList.toString(), "( 20 ) -> null");

    this.linkedList.removeAt(0);
    assert.strictEqual(this.linkedList.toString(), "null");

    assert.throws(() => this.linkedList.removeAt(0));
  }
}

// To use this test suite, ensure you have implemented the LinkedList class
// and instantiate the LinkedListTest class like so:

const testSuite = new LinkedListTest();
testSuite.runTests();

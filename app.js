import { LinkedList } from "./LinkedList.js";
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(`third is ${list.at(3)}`);
list.prepend("first");
console.log("with first prepended");
console.log(list.toString());
console.log(list.size());
console.log(list.contains("turtle"));
list.pop();
console.log(list.contains("turtle"));
console.log(list.find("snake"));
console.log(list.find("turtle"));
try {
  console.log(list.at(99));
} catch (e) {
  console.log(e);
}

try {
  list.pop();
  list.pop();
  list.pop();
  list.pop();
  list.pop();
  list.pop();
  list.pop();
  list.pop();
} catch (e) {
  console.log(e);
}

try {
  list.at(0);
} catch (e) {
  console.log(e);
}

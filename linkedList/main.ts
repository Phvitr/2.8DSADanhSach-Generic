import {LinkedList} from "./linkedList";

let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertFirstNode(3);
linkedList.insertFirstNode(6);
linkedList.insertLastNode(9);
console.log(linkedList.getSize());
console.log(linkedList.readList());
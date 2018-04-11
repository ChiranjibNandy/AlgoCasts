// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data,next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const node = new Node(data,this.head); // it takes a second argument
		this.head = node;
	}

	size() {
		let node = this.head;
		let counter = 0;
		while(node) {
			node = node.next;
			counter ++;
		}
		return counter;

	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if(!this.head) return null;
		let node = this.head;
		while(node.next) {
			node = node.next;
		}
		return node;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head) return null;
		this.head = this.head.next;
	}

	removeLast() {
		if(!this.head) return null;
		if(!this.head.next) { // if the list has only one node
			this.head = null;
			return null;
		}
		let previous = this.head;
		let node = this.head.next;

		while(node.next) {
			previous = previous.next;
			node = node.next;
		}
		previous.next = null;

	}

	insertLast(data) {
		const lastNode = this.getLast();
		if(lastNode)
			lastNode.next = new Node(data);
		else
			this.head = new Node(data);
	}

	getAt(index) {
		if(!this.head) return null;
		let node = this.head;
		let counter = 0;
		while(node) {
			if(counter === index) {
				return node;
			}
			node = node.next;
			counter ++;
		}
		return null;
	}

	removeAt(index) {
		if(!this.head) return null;
		if(index === 0) {
			this.head = this.head.next;
			return;
		}
		const prevNode = this.getAt(index-1);
		if(!prevNode || !prevNode.next) return;
		prevNode.next = prevNode.next.next;
	}

	insertAt(data,index) {
		if(!this.head) {
			this.head = new Node(data);
			return;
		}
		if(index === 0) {
			this.head = new Node(data,this.head);
			return;
		}
		const prevNode = this.getAt(index-1) || this.getLast();
		const node = new Node(data, prevNode.next);
		prevNode.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while(node) {
			fn(node,counter);
			node = node.next;
			counter++;
		}
	}

}

module.exports = { Node, LinkedList };

/*
 * Essential Data structures in Javascript
 * =======
 * Collection of essential computer science data structures in Javascript. Plus some additional nifty datastructures coming in upcoming versions.
 * Author: Shantibhushan Naik <visitsb at gmail dot com>
 * Version: v1.0
 * License: MIT https://github.com/visitsb/default/blob/master/LICENSE
 */
<!--
	/* Base data structures */
	
	/* A simple node structure consisting of `value`, and link to `next` item. 
	 * Calling `value()` without any parameters acts like a getter to read values
	 * Calling `next()` behaves in the same way
	 */
	var Node= function() {
		/* Private variables */
		var v= 0;
		var n= null;
		
		/* Public API */
		var api= {
			value: function(val) {
				if(0!== arguments.length) v= val;
				return(v);
			},
			next: function(node) {
				if(0!== arguments.length) n= node;
				return(n);
			}
		};
		
		/* Public synonyms */
		// None

		return(api);
	};
	
	var UnaryNode= Node;	// alias
	
	/* Extension to `Node` giving access to `previous` */
	var BinaryNode= function() { // Might be better ways to use inheritance, but I think is more straightforward
		var u= new Node();	
		var p= null;
		
		var api= {
			value: u.value,
			next: u.next,
			previous: function(node) {
				if(0!== arguments.length) p= node;
				return(p);
			}
		};
		
		return(api);
	};
	
	/* Similar to `BinaryNode` except `next` is referred to as `right`, and `previous` is referred to as `left` */
	var TernaryNode= function() {
		var b= new BinaryNode();

		var api= {
			value: b.value,
			left: b.previous,
			right: b.next
		};
		
		return(api);
	};
	
	var TreeNode= TernaryNode;	// alias

	/* Advanced data structures */
	/* A double-ended queue is an advanced data structure which allows `push`, `pop` from whichever end you want to.
	 * This advanced data structure provides you with a list into which you can `pushFirst`, or `pushLast` and you can `popFirst`, or `popLast`.
	 * To handle complex operations, at anytime you can check `isEmpty`, or `size` to determine items in the list for processing.
	 */
	var Dequeue= function() {
		var hdr= null; // Node
		var ftr= null; // Node
		var count= 0;
		
		var api= {
			pushFirst: function(item) {
				var n= new BinaryNode();
				n.value(item);
				n.next(hdr);
				n.previous(null);	// Keep header
				
				if(null=== ftr) ftr= n;
				if(null!== hdr) hdr.previous(n);
				
				hdr= n;
				count++;
			},
			pushLast: function(item) {
				var n= new BinaryNode();
				n.value(item);
				n.next(null);	// Keep footer
				n.previous(ftr);
				
				if(null=== hdr) hdr= n;
				if(null!== ftr) ftr.next(n);

				ftr= n;
				count++;
			},
			popFirst: function() {
				var t= new BinaryNode();
				
				if((null!== hdr) && (0!== count)) {
					t= hdr;
					hdr= hdr.next();
					count--;
					
					if(0=== count) ftr= ftr.next();
				}
				
				return(t.value());
			},
			popLast: function() {
				var t= new BinaryNode();
				
				if((null!== ftr) && (0!== count)) {
					t= ftr;
					ftr= ftr.previous();
					count--;
					
					if(0=== count) hdr= hdr.previous();	
				}
				
				return(t.value());
			},
			size: function() {
				return(count);
			},
			isEmpty: function() {
				return((null=== hdr) && (null=== ftr) && (0=== count));
			}
		};
		
		// synonyms
		
		return(api);
	};
	
	var Deque= Dequeue;	// alias
	var Deck= Dequeue;	// alias
	
	/* Stack is the most basic form of data structure that uses `Node` and provides a list into which items are `push`ed on top, and `pop`ed off from top. 
	 * `push`, `pop` happens on same end providing you with a simple LIFO (Last In First Out) list of items. At any time, you can use `isEmpty` to check is list is empty.
	 * Alternatively, you can also use read-only `size` to determine how many items are currently in the list.
	 */
	var Stack= function() {
		var d= new Dequeue();
		
		var api= {
			push: d.pushFirst,
			pop: d.popFirst,
			size: d.size,
			isEmpty: d.isEmpty
		};
		
		// synonyms
		api['shift']= api['push'];
		api['unshift']= api['pop'];

		return(api);
	};
	
	var LinkedList= Stack;	// alias
	var LIFOQueue= Stack;	// alias
	
	/* Queue is another basic form of data structure representing a list into which items can be `push`ed on one end, and `pop`ed off the other end. 
	 * This gives you a nice list of items that can be queued for LIFO (Last In First Out) processing. 
	 * Similar to `Stack`, both `isEmpty` and `size` are available.
	 */
	var Queue= function() {
		var d= new Dequeue();

		var api= {
			push: d.pushLast,
			pop: d.popFirst,			
			size: d.size,
			isEmpty: d.isEmpty
		};
		
		// synonyms
		api['enqueue']= api['push'];
		api['shift']= api['push'];
		api['dequeue']= api['pop'];
		api['unshift']= api['pop'];
		
		return(api);
	};
	
	var FIFOQueue= Queue;	// alias
//-->
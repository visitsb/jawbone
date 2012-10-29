Essential Data structures in Javascript
=======
Collection of essential computer science data structures in Javascript. Plus some additional nifty datastructures coming in upcoming versions.

Contains basic data structures

*    **Node** (aliases **UnaryNode**)
     A simple node structure consisting of `value`, and link to `next` item.  

     `var a= new Node();`  
     `var b= new Node();`  
     `var c= new Node();`  
     
     `a.value(1);`  
     `b.value(2);`  
     
     `a.next(b);`  	
     `b.next(null); // [Optional] This is by default`  
     
     `// Now traverse the nodes using their links`  
     `var t= a; // Start with first node`  
     `while(t!== null) {`  
         `    alert(t.value());`  
         `    t= t.next();`  
     `}`  

     Calling `value()` without any parameters acts like a getter to read values  
     Calling `next()` behaves in the same way  

*    **BinaryNode**  
     Extension to `Node` giving access to `previous`  
    
*    **TernaryNode** (alias `TreeNode`)  
     Similar to `BinaryNode` except `next` is referred to as `right`, and `previous` is referred to as `left`

Plus some advanced data structures

*    **Stack** (aliases `LinkedList`, `LIFOQueue`)  
     Stack is the most basic form of data structure that uses `Node` and provides a list into which items are `push`ed on top, and `pop`ed off from top.  
     `push`, `pop` happens on same end providing you with a simple LIFO (Last In First Out) list of items. At any time, you can use `isEmpty` to check is list is empty.  
     Alternatively, you can also use read-only `size` to determine how many items are currently in the list.  

*    **Queue** (aliases `FIFOQueue`)  
     Queue is another basic form of data structure representing a list into which items can be `push`ed on one end, and `pop`ed off the other end. 
     This gives you a nice list of items that can be queued for LIFO (Last In First Out) processing.  
     Similar to `Stack`, both `isEmpty` and `size` are available.  

*    **Dequeue** (aliases `Deque`, `Deck`)  
     A double-ended queue is an advanced data structure which allows `push`, `pop` from whichever end you want to. 
     This advanced data structure provides you with a list into which you can `pushFirst`, or `pushLast` and you can `popFirst`, or `popLast`.  
     To handle complex operations, at anytime you can check `isEmpty`, or `size` to determine items in the list for processing.

No external dependencies on any other libraries. To use in your page,  
`<script type="text/javascript" language="javascript" src="core_data_structures-1.0.js"></script>`  
A minified version is available too in case you choose to  
`<script type="text/javascript" language="javascript" src="core_data_structures-1.0.min.js"></script>`  

Aliases allow you to use user-friendly names to represent these data structures. Few intuitive aliases are already provided. In Javascript, everything is an object, hence you can store & retrieve any type of Javascript object onto the `Stack`, or `Queue`.  

For advanced ease of use, some synonyms are allowed within these data structures as below  
     `shift` is synonymous to `push` on a `Stack`, `Queue` and their aliases.  
     `unshift` is synonymous to `pop` on a `Stack, `Queue` and their aliases.  
     `enqueue` is synonymous to `push` on a `Queue` and it's aliases.  
     `dequeue` is synonymous to `pop` on a  `Queue` and it's aliases.  

Please feel free to use, suggest, augment as long as you honor the [LICENSE](./LICENSE).  
    
// Implement a queue using two stacks


// Queue is a constructor function (to be invoked with the new keyword).
// The pseudoclassical instantiation pattern in javascript uses this 
// constructor to instantiate new instances of an object/ class.
// In this instantiation pattern, each instance of a class refers to
// the same method object-- the prototype property of the constructor
// This saves space by not creating new helper functions in memory,
// but does not allow for private variables due to the use of the 
// this keyword

var Queue = function(){
  // keep inbox and outbox stacks to maintain constant time complexity
  this._inbox = [];
  this._outbox = [];
}

Queue.prototype.add = function(value){
  // when adding, push the value to the inbox
  this._inbox.push(value);
  return value;
}

Queue.prototype.remove = function(){
// when adding, if the outbox is empty,
  if(!this._outbox.length){
  // remove all items from the inbox, and place them in the outbox
  // (in reverse order)
    while(this._inbox.length){
      this._outbox.push(this._inbox.pop());
    }
  }
  // then return the last item in the outbox
  // (the first item added to the queue)
  return this._outbox.pop();
}



/* Now implemet a queue with two stacks,
   but maintain the inbox and outbox as private variables */

// must use functional instantiation to create private variables in javascript
// this means that rather than a constructor, a factory function is used, 
// which creates new instances of each helper function for each queue that's instantiated
var queueMaker = function(){
  // as above, maintain the inbox and outbox stacks;
  var inbox = [];
  var outbox = [];

  // but this time, create a collection of methods to return
  //    --> the getter and setter functions for the queue
  var queue = {};

  queue.add = function(value){
    inbox.push(value);
    console.log(inbox);
    return value;
  }

  queue.remove = function(){
    if(!outbox.length){
      while(inbox.length){
        outbox.push(inbox.pop());
      }
    }
    console.log('inbox',inbox);
    console.log('outbox',outbox);
    return outbox.pop();
  }

  return queue;
}

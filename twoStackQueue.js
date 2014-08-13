// Implement a queue using two stacks

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

// Implement a queue using two stacks

var Queue = function(){
  this._inbox = [];
  this._outbox = [];
}

Queue.prototype.add = function(value){
  this._inbox.push(value);
  return value;
}

Queue.prototype.remove = function(){
  if(!this._outbox.length){
    while(this._inbox.length){
      this._outbox.push(this._inbox.pop());
    }
  }
  return this._outbox.pop();
}

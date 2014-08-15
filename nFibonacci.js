// Write a function that computes the nth fibonacci number

var nFibonacci = function(n, x, prev){
  x = x || 1;
  if(x === Infinity) return Infinity;
  if(n > 1){
    return nFibonacci(n - 1, x + prev|| 0, x);
  }
  return x;
}

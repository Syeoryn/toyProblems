// write n! as recursive

function nFactorial(n){
  return n > 1 ? n * nfactorial(n-1) : 1
}


// n fibonacci -- return the nth fibonacci number

function nFibonacci(n){
  if(n>=0){
    return (nFibonacci(n-1) || 1) + (nFibonacci(n-2) || 0);
  }
}

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

// n fibonacci, but faster (use while-loop logic)
function fasterFib(n,n1,n2){
  if(n<2 && !n1) {return 1}
  n1 = n1 || 1;
  n2 = n2 || 1;
  while(n > 2){
    return fasterFib(--n,n1+n2,n1);
  }
  return n1+n2;
}

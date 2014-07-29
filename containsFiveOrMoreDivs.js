var containsFiveOrMoreDivs = function(node){
  node = node || document.body;
  var counter = 0;
  var countDivs = function(node){
    if(node.tagName === 'DIV') counter++;
    for(var i = 0; i < node.children.length; i++){
      countDivs(node.children[i]);
    }
  }
  countDivs(node);
  return counter >= 5;
}

// same function, but stops once it hits 5 divs
var efficientContainsFiveOrMoreDivs = function(node){
  node = node || document.body;
  var counter = 0;
  var countDivs = function(node){
    if(node.tagName === 'DIV') counter++;
    if(counter >= 5) return 0;
    for(var i = 0; i < node.children.length; i++){
      countDivs(node.children[i]);
      if(counter >= 5) break;
    }
  }
  countDivs(node);
  return counter >= 5;
}

// same function, with no inner helper function
var fiveOrMoreDivs = function(node, depth){
  node = node || document.body;
  depth = depth || 0;
  var divCount = 0;
  if(node.tagName === 'DIV') divCount++;
  for(var i = 0; i < node.children.length; i++){
    divCount += fiveOrMoreDivs(node.children[i], depth + 1);
  }
  if(depth === 0) return divCount >= 5;
  return divCount;
}

// also with no helper function, but this time it stops
// once it finds 5 divs
var efficientFiveOrMoreDivs = function(node, depth, divCount){
  node = node || document.body;
  depth = depth || 0;
  divCount = divCount || 0;
  if(node.tagName === 'DIV') divCount++;
  for(var i = 0; i < node.children.length; i++){
    var count = efficientFiveOrMoreDivs(node.children[i], depth + 1, divCount);
    if(count === true) return true;
    if(count !== true) divCount = count;
  }
  if(depth === 0) return divCount >= 5;
  return divCount >= 5 || divCount;
}

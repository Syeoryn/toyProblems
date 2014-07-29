var containsFiveOrMoreDivs = function(node){
  node = node || document.body;
  var counter = 0;
  var countDivs = function(node){
    if(node.tagName === 'DIV'){
      counter++;
    }
    for(var i = 0; i < node.children.length; i++){
      countDivs(node.children[i]);
    }
  }
  countDivs(node);
  return counter >= 5;
}

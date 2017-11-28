// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, result) {
  if (result === undefined) {
    result = [];
  }  

  if (node === undefined) {
    node = document.body;
  } 
  
  if (node.classList.contains(className)) {
    result.push(node);
  }          
  
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].classList === undefined) {
      continue;
    }
    getElementsByClassName(className, node.childNodes[i], result);
  }

  return result;
};


// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var output = [];

  var pushNodeifClassPresent = function (currentNode, className) {
    if (_.contains(currentNode.classList, className)) {
      output.push(currentNode);
    }

    if (currentNode.hasChildNodes()) {
      for (let i = 0; i < currentNode.childNodes.length; i++) {
        pushNodeifClassPresent(currentNode.childNodes[i], className);
      }
    }
  };

  pushNodeifClassPresent(body, className);
  return output;
  // your code here
};

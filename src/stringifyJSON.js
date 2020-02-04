// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //num
  //string
  //undefined
  //array
  //object

  var result = '';


  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return result = `${obj}`;
  }

  if (typeof obj === 'string') {
    return result += `"${obj}"`;
  }

  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }

    result += '[';
    for (let i = 0; i < obj.length - 1; i++) {
      result += `${stringifyJSON(obj[i])},`;
    }
    result += stringifyJSON(obj[obj.length - 1]) + ']';
    return result;
  }

  if (obj instanceof Object) {
    var keyArr = Object.keys(obj);

    if (keyArr.length === 0) {
      return '{}';
    }

    result += '{';

    for (let i = 0; i < keyArr.length - 1; i++) {
      result += `"${keyArr[i]}": ${stringifyJSON(obj[i])},`;
    }
    result += `"${keyArr[keyArr.length - 1]}": ${stringifyJSON(obj[keyArr.length - 1])}"}"`;
    return result;
  }


};

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:





var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null || typeof obj === 'undefined') {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return "\"" + obj + "\"";
  } else if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj) && obj.length > 0) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result.join(',') + ']';
  } else if (!Array.isArray(obj)) {
    var solution = [];
    for (var key in obj) {
      if (!obj.hasOwnProperty(key) || key === 'undefined') {
        return '{}';
      } else {
        solution.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));    
      }
    }
    return '{' + solution.join(',') + '}';
  }


};

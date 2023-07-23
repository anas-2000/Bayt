function contains(obj, targetValue) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (contains(obj[key], targetValue)) {
          return true;
        }
      } else if (obj[key] === targetValue) {
        return true;
      }
    }
    return false;
  }
  
  // Sample Object
  var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: 'foo2',
              has: 'pat'
            }
          }
        }
      }
    }
  };
  
  // Test example
  console.log(contains(nestedObject, 'foo2')); // Output: true
  console.log(contains(nestedObject, 44));     // Output: true
  console.log(contains(nestedObject, 'bar')); // Output: false
  
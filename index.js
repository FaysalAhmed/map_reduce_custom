

function customMap(arr,inc) {
  var [elm, ...remains] = arr;

  if (elm === undefined) {
    return [];
  } else {
    return [elm + inc, ...customMap(remains, inc)]
  }
}

// example 

arr = [2, 3, 4];

console.log(customMap(arr, 2));
// should return [4,5,6]
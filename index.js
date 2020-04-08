

function customMap(arr,inc) {
  var [elm, ...remains] = arr;
  if (elm === undefined) {
    return [];
  } else {
    return [elm + inc, ...customMap(remains, inc)]
  }
}

function customReduce(arr) {
  var [elm, ...remains] = arr;
  if (elm === undefined) {
    return 0;
  } else {
    return elm + customReduce(remains);

  }
}

// example 

arr = [2, 3, 4];
console.log(customMap(arr,2))
console.log(customReduce(arr));
// should return [4,5,6]
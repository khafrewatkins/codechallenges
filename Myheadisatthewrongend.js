function fixTheMeerkat(arr) {
 //your code here 
  const corrected = arr.reverse();
  return corrected
}

// or

function fixTheMeerkat(arr) {
 Array.prototype.reverse.call(arr)
  return arr
}
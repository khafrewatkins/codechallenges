function highAndLow(numbers){
  // ...
  let nospace = numbers.split(' ')
  return `${Math.max(...nospace)} ${Math.min(...nospace)}`
  
}
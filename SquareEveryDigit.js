function squareDigits(num){
  //may the code be with you
 let numb = Number(('' + num).split('').map(function (val) { return val * val;}).join(''))
  return numb
 


}
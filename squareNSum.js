function squareSum(numbers){

let answer = numbers.reduce(function(x, y){ return (y * y) + x; },0)
  return answer;
}
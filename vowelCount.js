function getCount(str) {
  var vowelsCount = str.match(/[aeiou]/gi);

  if(vowelsCount){
    return vowelsCount.length
  }else{
    return 0
  }
  
  
  
  return vowelsCount;
}
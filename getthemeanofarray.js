function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  
  
  let allnums = marks.reduce((sum, current) => sum + current, 0);
  let numave = allnums/marks.length;
  return Math.floor(numave);
}
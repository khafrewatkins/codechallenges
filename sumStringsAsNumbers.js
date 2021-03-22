function sumStrings(a,b) { 

  var sum = [];

 
  var ra = a.split('').reverse();
  var rb = b.split('').reverse();

 
  var length = Math.max(ra.length, rb.length);

  var plus = 0;
  for (var i=0; i <= length; i++) {
   
    var digit = (parseInt(ra[i]) || 0) + (parseInt(rb[i]) || 0) + plus;

     
    if (digit > 9) {
      digit = digit - 10;
      plus = 1;
    } else {
      plus = 0;
    }
    

    sum.unshift(digit);
  }

  
  var start = false;
  var reduced = sum.reduce((a,c) => { if (c > 0 && !start) {start= true; a = ""; }; return start ? (a.toString() + c.toString()) : "" }, 0)
  
  return reduced;
  
}
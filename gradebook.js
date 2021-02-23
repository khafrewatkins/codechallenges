function getGrade (s1, s2, s3) {
  // Code here
  let a = [s1, s2, s3]
  
  let b = ((s1 + s2 + s3)/ a.length)
  
  if (b >= 90){

    return 'A'
  } else if (b >= 80 && b < 90){

    return 'B'
  } else if (b >= 70 && b < 80){
    return 'C'
  } else if (b >= 60 && b < 70){
    return 'D'
  }else if (b >= 0 && b < 60){
    return 'F'
  }
}
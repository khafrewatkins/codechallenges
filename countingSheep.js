function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let iterator = 0
  for (i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i]) iterator += 1;
  }
  return iterator;
}
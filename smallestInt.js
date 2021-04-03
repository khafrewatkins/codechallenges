class SmallestIntegerFinder {
  findSmallestInt(args) {
   let args2 = args[0]

    for(let i = 0; i < args.length; i++){
        if(args[i] < args2) args2 = args[i]
    }

    return args2
    
  }
 
  }
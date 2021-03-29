function validParentheses(parens){
  //TODO 
  
  
   let container = [];
    let map = {
        '(': ')',
       
    }

    for (let i = 0; i < parens.length; i++) {


        if (parens[i] === '(' ) {
            container.push(parens[i]);
        }
        
        else {
            let last = container.pop();

            
            if (parens[i] !== map[last]) {return false};
        }
    }
    
        if (container.length !== 0) {return false};

    return true;
  

  
}
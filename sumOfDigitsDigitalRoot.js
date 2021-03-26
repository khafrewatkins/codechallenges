function digital_root(n) {
  
  let m = 0;
        while (n > 0 || m > 9) {
             if(n == 0) {
                n = m;
                m = 0;
             }
             m = m + n % 10;
             n = Math.floor(n / 10);
        }
        return m;
 

}


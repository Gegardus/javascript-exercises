const palindromes = function (str) {
  ns = [];
  let alpha = "abcdefghijklmnoprstuvwxyz";  
  let a = str.toLowerCase();  

  for(let i = 0; i < a.length; i++) {
       for(let j = 0; j < alpha.length; j++) {
        if(a.charAt(i) === alpha.charAt(j)) {
          ns.push(a.charAt(i));
            }
       }
  }
 
  let nString = ns.join("");
  let rev = ns.reverse();
  let revStr = rev.join("");

   if( nString === revStr ) {
     return true;
    }  
 return   false; //sa + "\n " + sb;
};

module.exports = palindromes;

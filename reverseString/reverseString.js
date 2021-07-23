const reverseString = function(str) {

let revStr = "";
  
      for(let i = 0; i < str.length; i++) {
        
        for(let j = str.length - 1; j >= 0; j--) {
          
          str[j] = str[i];
          
          revStr +=  str[j];          
      
        } break;
      }
          return revStr;

};

module.exports = reverseString;

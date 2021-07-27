const fibonacci = function(num) {
  
    let fibo = [];
  
    fibo[0] = 1;
    fibo[1] = 1;

    if(num < 0) return "OOPS";
  
  for(let i = 2; i < num; i++) {    
    fibo[i] = fibo[i -1] + fibo[i - 2]; 
  }
  
return fibo.pop();
};

module.exports = fibonacci;

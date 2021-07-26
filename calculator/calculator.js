const add = function(num_1, num_2) {
       let result = num_1 + num_2;
	return result;
};

const subtract = function(num_1, num_2) {
	let result = num_1 - num_2;
	return result;
};

const sum = function(arr) {
  let sum = 0;
	for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum;
};

const multiply = function(arr) {
           let result = 1;
     for(let i = 0; i < arr.length; i++) {
            result *= arr[i];
    }
	return result;
};

const power = function(num_1, num_2) {
     let result = 1;
   while(num_2 > 0) {
           result *= num_1;
     num_2--;
    }
	return result;
};

const factorial = function(num) {
    let fac = 1;
    let arr = [];
  	for(let i = 1; i <= num; i++) {
            arr.push(i);
    }
  for(let i = 0; i < arr.length; i++) {
            fac *= arr[i];
    }	
      return fac;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

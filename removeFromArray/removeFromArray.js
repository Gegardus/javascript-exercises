const removeFromArray = function(arr, elem1, elem2, elem3, elem4) {
   newArr = [];

     for(let i = 0; i < arr.length; i++) {       
         if(arr[i] !== elem1 && arr[i] !== elem2 && arr[i] !== elem3 && arr[i] !== elem4)
          newArr.push(arr[i]);
    }
  
  return newArr;
};

module.exports = removeFromArray;

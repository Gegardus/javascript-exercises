const getTheTitles = function(arr) {   
       let titles = [];
       for (let i = 0; i < arr.length; i++) {       
         e = Object.entries(arr[i]);
         e.forEach(([key, value]) => {
         if (key === "title") {      
           titles.push(value);
       }
         });


      } 
         return  titles;
};

module.exports = getTheTitles;

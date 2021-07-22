const leapYears = function(year) {
  
  const leapYear = true;
  
  if((year % 100 !== 0 && year % 4 == 0) || 
     (year % 100 == 0 && year % 400 == 0)) 
     return leapYear;
     else return false;

};

module.exports = leapYears;

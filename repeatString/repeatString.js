const repeatString = function(str, num) {

const words = [];

if (num < 0) {
return "ERROR";
} else {

for(let i = 0; i < num; i++) {
     words[i] = str;
}

}

return words.join("");

};

module.exports = repeatString;

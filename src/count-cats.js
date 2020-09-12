const CustomError = require("../extensions/custom-error");

module.exports = function countCats(multiArr) {
  // remove line with error and write your code here
let count = 0;
const catEars = "^^";

for(let i = 0; i < multiArr.length; i++){
    for(let j = 0; j < multiArr[i].length; j++){
        if(multiArr[i][j] === catEars){
            count++;
        }

    }
}
return count;
};

const palindromes = function (str) {

    var newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reverseArray = [...newStr].reverse()

    for (let i = 0; i < newStr.length; i++){
        if(reverseArray[i] !== newStr[i]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

const repeatString = function(string, val) {

    var newStr = '';

    if (val < 0){
        return "ERROR";
    }

    for (var i = 0; i < val; i++){
        newStr += string;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;

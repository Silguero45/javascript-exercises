const fibonacci = function(index) {
    
    index = Number(index);

    var nextVal = 1;
    var preVal = 1;

    if (index < 0){
        return "OOPS";
    }

    for (var i = 1; i < index; i++){
        nextVal += preVal;
        preVal = nextVal - preVal;
    }

    return preVal;
};

// Do not edit below this line
module.exports = fibonacci;

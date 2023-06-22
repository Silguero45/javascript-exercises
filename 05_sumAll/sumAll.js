const sumAll = function(val1,val2) {

    if ((val1 > 0 && val2 > 0) && (typeof val1 === "number" && typeof val2 === "number")){
        if (val1 > val2) {
            [val1, val2] = [val2, val1];
        }  

        for(var i = val1+1; i <= val2; i++){
            val1 = val1+i;
        }
    }
    else{
        return "ERROR";
    }
    return val1;

};

// Do not edit below this line
module.exports = sumAll;

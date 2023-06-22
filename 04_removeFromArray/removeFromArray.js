const removeFromArray = function(arr, ...args) {
    for (let arg in args){
        let value = (arr.indexOf(arg));
        arr.splice(value, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

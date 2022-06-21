const reverseString = function(given) {
    let out = ""
    for (let i = given.length -1; i >= 0; i--) {
        out += given[i]
    }
     return out   
};

// Do not edit below this line
module.exports = reverseString;

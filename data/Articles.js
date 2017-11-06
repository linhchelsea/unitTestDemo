'use strict';

module.exports = {
    isEven : ( number ) => {
        if(number === 0){
            throw new Error ('0 is not even also odd');
        }
        if (number % 2 ===0 ) return true;
        return false;
    },
    isTriangle : ( a , b , c ) => {
        return a+b > c && b+c > a && c+a > b;
    },
    pytago : ( a , b ) => {
        return a*a + b*b;
    },
    add : ( a , b ) => {
        return a + b;
    }
};
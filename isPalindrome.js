'use strict';

const isString = require('lodash.isstring');
const isNumber = require('lodash.isnumber');
const isUndefined = require('lodash.isundefined');

/**
 * isPalindrome() v0.0.0
 * author: Rusinov Anton
 * @param { String } str
 * @returns { Boolean } is argument a palindrome
 */
module.exports = function isPalindrome(str) {

    // Test if str is String
    if (isUndefined(str) || !isString(str)) {
      // Its not a palindrome if its nor String neither Number
      if (!isNumber(str)) return false;
      // convert str to String if it is a Number 
      else str = str.toString();
    }

    // Get rid of special characters
    str = str.replace(/[^a-z0-9]/gi, '');

    // Empty string is a palindrome
    if (str === '') return true;

    // Test if first symbol of str is equal to its last one,
    // then use strip string recursively until its become ''
    else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substr(1, str.length - 2));
    }

    // If str's first and last symbols aren't the same - it is not a palindrome
    else return false;

};

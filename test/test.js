'use strict';

const expect = require('chai').expect;
const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
	it('should return true if argument string is a palindrome', () => {
		expect(isPalindrome('')).to.equal(true);
		expect(isPalindrome('aa')).to.equal(true);
		expect(isPalindrome('ara')).to.equal(true);
		expect(isPalindrome('909')).to.equal(true);
		expect(isPalindrome(124421)).to.equal(true);
		expect(isPalindrome(12.4421)).to.equal(true);
		expect(isPalindrome('$909@$')).to.equal(true);
	});

	it('should return false if argument string is not a palindrome', () => {
		expect(isPalindrome('fara')).to.equal(false);
		expect(isPalindrome('ar')).to.equal(false);
		expect(isPalindrome(1244321)).to.equal(false);
		expect(isPalindrome(undefined)).to.equal(false);
		expect(isPalindrome([])).to.equal(false);
		expect(isPalindrome(null)).to.equal(false);
	});
});

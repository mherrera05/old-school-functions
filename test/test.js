var assert = require('assert');
var utils = require('../app.js');

describe('Palindrome', function(){
    describe('Is Palindrome', function(){
        it('should return true when word is palindrome "ana"', function() {
            var word = 'ana';
            let result = utils.prototype.palindrome(word);
            assert.equal(result, true)
        });
    });
    describe('Is not Palindrome', function(){
        it('should return false when word is not palindrome "hello"', function() {
            var word = 'hello';
            let result = utils.prototype.palindrome(word);
            assert.equal(result, false)
        });
    });
    describe('There is no word', function() {
        it('should return string when there is no word', function() {
            var word;
            let result = utils.prototype.palindrome(word);
            assert.equal(result, 'introduce a word!');
        })
    })
});

describe('Fibonacci', function() {
    describe('Return Fibonacci of a number', function() {
        it('should return 13 for Fibonacci of 7', function() {
            var  number = 7;
            let result = utils.prototype.fibonacci(number);
            assert.equal(result, 13);
        });
    });
});
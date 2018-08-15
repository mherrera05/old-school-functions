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
        it('should return 21 for Fibonacci of 8', function() {
            var number = 8;
            let result = utils.prototype.fibonacci(number);
            assert.equal(result, 21);
        });
    });
    describe('There is no number', function() {
        it('should return string when there is no number', function() {
            var number;
            let result = utils.prototype.fibonacci(number);
            assert.equal(result, 'introduce a number!');
        })
    })
});

describe('Vowels in word', function() {
    describe('All vowels in the word', function() {
        it('should return true if word has all vowels', function() {
            var word = 'murcielago';
            let result = utils.prototype.vowels(word);
            assert.equal(result, true);
        });
    });
    describe('Some vowels in the word', function() {
        it('should return false if word has some vowels', function() {
            var word = 'december';
            let result = utils.prototype.vowels(word);
            assert.equal(result, false);
        });
    });
    describe('There is no word', function() {
        it('should return string if there is no word', function() {
            var word;
            let result = utils.prototype.vowels(word);
            assert.equal(result, 'introduce a word!');
        })
    })
});
var assert = require('assert');
var utils = require('../app.js');

describe('Palindrome', function(){
    describe('Is Palindrome', function(){
        it('should return true when word is palindrome "ana"', function() {
            var word = 'ana';
            assert.equal(utils.prototype.palindrome(word), true)
        });
    });
    describe('Is not Palindrome', function(){
        it('should return false when word is not palindrome "hello"', function() {
            var word = 'hello';
            assert.equal(utils.prototype.palindrome(word), false)
        });
    });
});
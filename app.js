
class Utils {
    constructor() {}

    palindrome(word) {
        let response = true;
        for(let pos = 0; pos < word.length/2; pos ++) {
            if(word[pos] != word[word.length-pos-1]) {
                response = false;
                break;
            }
        }
        return response;
    }
}

module.exports = Utils;
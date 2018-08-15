
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

    fibonacci(number) {
        var array = [0, 1];
        for (let pos = 0; pos <= number; pos++) {
            if (pos > 1) {
                array.push(array[pos-2]+array[pos-1]);
            }
        }
        console.log(array);
        return array[number];
    }
}

module.exports = Utils;
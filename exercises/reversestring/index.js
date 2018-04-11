// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//Array.prototype.reverse()
	// return str.split('').reverse().join('');

	// var temp = '';
	// for(var i = str.length-1; i >= 0; i--){
	// 	temp += str[i];
	// }
	// return temp;

	// for(let char of str) { // ES2015 for-of syntax
	// 	temp = char + temp;
	// }
	// return temp;

	// Whenever reduce runs it's going to take this starting argumnet, it's going to pass
	// it into the arrow function as the first argument and then whatever gets returned 
	// from that inner function will be then used as the starting arument of every successive
	// run of the function.
	return str.split('').reduce((reversed,char) => {
		return reversed = char + reversed;
	},''); // Second argument - Empty string is the starting initial argument value here
}

module.exports = reverse;

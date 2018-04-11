// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// Array.prototype.every -- is used to do a boolean check on every element within an array
	// arr.every((val) => val > 5);
	// If any function returns false, then the overall expression returns false as well
	return str.split('').every((char,i) => {
		return char === str[str.length -i -1]; // mirrored element
	});
}

module.exports = palindrome;

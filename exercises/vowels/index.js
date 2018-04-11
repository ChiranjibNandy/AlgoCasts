// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	//const vowelsArr = ['a','e','i','o','u'];
	// const checker = "aeiou";
	// let counter = 0;
	// for(let char of str.toLowerCase()){
	// 	// if(vowelsArr.indexOf(char) >= 0){
	// 	// 	counter ++;
	// 	// }
	// 	if(checker.includes(char)){
	// 		counter ++;
	// 	}
	// }
	// return counter;
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}

module.exports = vowels;

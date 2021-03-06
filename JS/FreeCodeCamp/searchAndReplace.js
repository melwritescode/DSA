// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

//**************************** Solution 1 ****************************/

const myReplace = (str, target, replacement) => {
	const whichCase = 
		target[0] === target[0].toUpperCase() 
		? replacement[0].toUpperCase() 
		: replacement[0].toLowerCase() 
	

	const correctCase =  replacement.replace(replacement[0], whichCase)

	const newString = str.replace(target, correctCase)
	return newString;
}

myReplace("Let us go to the store", "store", "mall");

//**************************** Solution 2 ****************************/

const myReplace = (str, target, replacement) => {
	let caseCorrectedReplacement = replacement.toLowerCase()
	if(target[0] === target[0].toUpperCase()) {
		caseCorrectedReplacement = replacement.replace(replacement[0], replacement[0].toUpperCase())
	}
	return str.replace(target, caseCorrectedReplacement)
}

myReplace("I think we should look up there", "up", "Down")

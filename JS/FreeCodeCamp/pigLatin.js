// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

const translatePigLatin = (str) => {
	const regex = /([aeiou].*)/ 
	let translatedString;
	
	if(str[0].match(regex)) {
		translatedString = str.concat('way')
	}
	else {
		const splitAtVowel = str.split(regex);
		const consonantCluster = splitAtVowel[0];
		const suffix = consonantCluster.concat('ay');
		translatedString = splitAtVowel.slice(1).join('').concat(suffix)
	}
	return translatedString;
}

translatePigLatin('schwartz')

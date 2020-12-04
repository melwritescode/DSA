// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

const fearNotLetter = str => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let alphabetIdx = alphabet.indexOf(str[0]);
	let strIdx = 0

	while(strIdx < str.length) {
		if(str[strIdx] !== alphabet[alphabetIdx]) {
			return alphabet[alphabetIdx]
		}

		strIdx++;
		alphabetIdx++;
	}
	return undefined;

}

fearNotLetter("stvwx")

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

const convertHTML = str => {
	const htmlConversion = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&apos;'

	}

	const strArr = str.split('');
	const convertedHTMLArray = strArr.map(char => htmlConversion[char] || char)
	
	return convertedHTMLArray.join('')
}

convertHTML("Schindler's List")

// Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

//***********************Solution 1 **************************/

const destroyer = (arr, ...arguments) => {
	let filteredArr = arr;
	for(let i = 0; i < arguments.length; i++) {
		filteredArr = filteredArr.filter(item => {
			return item !== arguments[i]
		})
	}
	return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)


//***********************Solution 2 **************************/
const destroyer = (arr, ...arguments) => arr.filter(item => !arguments.includes(item))

destroyer([1, 2, 3, 1, 2, 3], 2, 3)

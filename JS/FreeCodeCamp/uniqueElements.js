// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//***********************Solution 1 **************************/
//** A function iterates over each array and checks if the other array contains the value at each index. If not it pushes that value into new array. Return the new array. */

const diffArray = (arr1, arr2) => {
	let uniqueValues = [];

	checkOtherArr(arr1, arr2, uniqueValues)
	checkOtherArr(arr2, arr1, uniqueValues)


	return uniqueValues;
}

const checkOtherArr = (first, second, newArr) => {
	for(let i = 0; i < first.length; i++) {
		if(second.indexOf(first[i]) < 0) {
			newArr.push(first[i])
		}
	}
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

//***********************Solution 2 **************************/
//** Join the arrays, then filter the joined array checking each index against both arrays. If the value is unique (does not occur in both arrays) filter it into a new array and return the filtered array. */

const diffArray = (arr1, arr2) => {
	const joinedArr = [...arr1, ...arr2]
	const uniqueValues = joinedArr.filter(idx => !arr1.includes(idx) || !arr2.includes(idx))

	return uniqueValues;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

//***********************Solution 3 **************************/
// The inverse of solution 2. A seperate function compares the two arrays and filters out any unique values into a new array. Call the function twice, reversing the order of array args provided. Using spread operator, join the two arrays that are returned from the function.

const diffArray = (arr1, arr2) => {
	const uniqueValues = [...compareArrays(arr1, arr2), ...compareArrays(arr2, arr1)];
	return uniqueValues;	
}

const compareArrays = (first, second) => {
	return first.filter(idx => !second.includes(idx))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])

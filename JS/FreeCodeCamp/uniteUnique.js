// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

const uniteUnique = (...arr) => {
	const joinedArr = [];
	const uniqueValues = [];

	arr.forEach(ele => joinedArr.push(...ele))

	joinedArr.forEach(char => {
		if(!uniqueValues.includes(char)) {
			uniqueValues.push(char);
		};
	});

	return uniqueValues
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

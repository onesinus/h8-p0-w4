function cariMedian(arr) {
	// you can only write your code here!
	let panjangData = arr.length;
	if(panjangData % 2 !== 0){
		let indexTengah = (panjangData / 2) - 0.5;
		return arr[indexTengah];
	}else{
		let indexTengah = (panjangData / 2);
		return (arr[indexTengah] + arr[indexTengah - 1]) / 2;
	}
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

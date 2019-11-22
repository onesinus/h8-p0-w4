function cariModus(arr) {
	// you can only write your code here!
	let modus			= -1;
	let tempJumlahAngkaPerData   	= 1;

	for(let i = 0; i < arr.length; i++){
		let jumlahAngkaPerData = 0;
		for(let j = 0; j < arr.length; j++){
			if(arr[i] === arr[j]){
				jumlahAngkaPerData++;
			}
		}
		if(jumlahAngkaPerData > tempJumlahAngkaPerData && jumlahAngkaPerData !== arr.length){
			modus = arr[i];
			tempJumlahAngkaPerData = jumlahAngkaPerData;
		}
	}
	return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1  

function digitPerkalianMinimum(angka) {
	// you can only write your code here!
	let digitMinimalPengali = angka;
	for(let i = 1; i < angka; i++){
		let jumlahDigitFaktorKali = `${i}${angka / i}`.length;
		if(angka % i === 0 && jumlahDigitFaktorKali < digitMinimalPengali){
			digitMinimalPengali = jumlahDigitFaktorKali;	
		}
	}	

	if(angka === 1){
		return 2;
	}else if(angka < 1){
		return 0;
	}

	return digitMinimalPengali;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

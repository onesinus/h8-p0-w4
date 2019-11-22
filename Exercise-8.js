function tukarBesarKecil(kalimat) {
	// you can only write your code here!
	let lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	
	const convertLetterCase = letter => {
		for(let i = 0; i < lowerLetters.length; i++){
			let isLower = lowerLetters[i] === letter;
			let isUpper = upperLetters[i] === letter;

			if(isLower){
				return upperLetters[i];
			}else if(isUpper){
				return lowerLetters[i];
			}
		}
		return letter;
	}

	let newWord = "";
	for(let j = 0; j < kalimat.length; j++){
		let convertedLetter = convertLetterCase(kalimat[j]);
		newWord += convertedLetter;
	}
	return newWord;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw" 

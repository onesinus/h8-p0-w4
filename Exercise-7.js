function urutkanAbjad(str) {
	// you can only write your code here!
	let arrLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const checkLetterPositions = letter => {
		for(let i = 0; i < arrLetters.length; i++){
			if(letter === arrLetters[i]){
				return i;
			}
		}
		return arrLetters[letter];
	}
	
	const sortingByAlphabet = str => {
		str = str.split("");
		for(let i = 0; i < str.length; i++){
			for(let j = 0, k = 1; j < str.length, k < str.length; j++, k++){			
				let leftLetter 	= checkLetterPositions(str[j]);
				let rightLetter = checkLetterPositions(str[k]);
				if(leftLetter > rightLetter){
					let tempFirstLetter 	= str[k];
					str[k] = str[j]
					str[j] = tempFirstLetter;
				}
			}	
		}
		return str.join("");
	}

	return sortingByAlphabet(str);
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

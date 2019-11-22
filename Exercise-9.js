function checkAB(num) {
	// you can only write your code here!
	let indexA 	= 0;
	let indexB 	= 0;
	for(let i = 0; i < num.length; i++){
		if(num[i] === "a"){
			indexA = i;
		}else if(num[i] === "b"){
			indexB = i;
		}

		if(indexA && indexB){
			if(indexA > indexB && indexA - indexB === 4 || indexB > indexA && indexB - indexA === 4){
				return true;
			}
		}
	}
	return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false

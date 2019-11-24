function highestScore (students) {
	// Code disini
	let highestPerClassObj = {};
	let scoreCompare       = 0;
	for(let i = 0; i < students.length; i++){
		let studentClass 	= students[i]["class"];
		let name  		= students[i]["name"];
		let score 		= students[i].score;
		
		// Jika class belum ada buat object key, jika sudah ada set highest score per class
		if(!highestPerClassObj[studentClass]){ 
			highestPerClassObj[studentClass] = {};
		}else{
			scoreCompare = highestPerClassObj[studentClass].score;			
		}

		// Hanya jika score berjalan lebih besar dari score terbesar dalam class itu baru object diganti
		if(score > scoreCompare){
			highestPerClassObj[studentClass] = {name, score}
		}
	}	
	return highestPerClassObj;
}

// TEST CASE

console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

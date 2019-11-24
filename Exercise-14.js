function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	//your code here
	const getIndexByRute = (rute, aRute) => {
		for(let i = 0; i < rute.length; i++){
			if(rute[i] === aRute){
				return i;
			}
		}
	}
	
	let arrDataAngkot = [];
	for(let j = 0; j < arrPenumpang.length; j++){
		let penumpang	  = arrPenumpang[j][0];
		let naikDari 	  = arrPenumpang[j][1];
		let tujuan 	  = arrPenumpang[j][2];
	
		let jumlahRute    = getIndexByRute(rute, tujuan) - getIndexByRute(rute, naikDari);
		let bayar	  = jumlahRute * 2000 ;
		bayar		  = bayar > 0 ? bayar : bayar * -1; // ini case ketika rute awalnya F rute tujuan B, dll

		arrDataAngkot[j] = {penumpang,naikDari,tujuan, bayar};
	}
	return arrDataAngkot;

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

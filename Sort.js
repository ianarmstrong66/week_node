function sortMyNumbers(){
	let job = [].slice.call(arguments).sort(function(a,b){
		return b-a;
	});
console.log( "Sorting to get highest gives " +job[0]);
highestOne(858,23623,236,26,236,5,7,848,4584,24635,458,48);
}

function highestOne(...arguments){
	console.log("About to sort");
	let job2 = arguments.sort(function(a,b){
		return b-a;
	});
	console.log("Spread for highest "+ job2[0]);
}
sortMyNumbers(4,5,3,2,6,8,1);
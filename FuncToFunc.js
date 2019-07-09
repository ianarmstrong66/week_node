function Maths(Func){
	Func(2,7);
}

let Add = function(a,b){
	Result=a+b;
	console.log("Addition Result: "+Result);
}

let Sub = function(a,b){
	Result=a-b;
	console.log("Subtraction Result: "+Result);
}

Maths(Add);
Maths(Sub);
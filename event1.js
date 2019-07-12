let events=require('events');
let eventEmitter = new events.eventEmitter();
let myEventHandler=function(){
	console.log("You here, but only for the beer");
}
let soggyEvent=function(){
	let a = 1;
	let b = 2;
	let c = a*b;
	console.log(c);
}
eventEmitter.on('jump',myEventHandler);
eventEmitter.on('calc', soggyEvent);
eventEmitter.emit('jump');
eventEmitter.emit('calc');
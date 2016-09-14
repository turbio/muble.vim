const Greeter = function(first, last) {
	this.name = {
		first,
		last
	};
}

Greeter.prototype.nameString = function() {
	if (this.name.last) {
		return `${this.name.last}, ${this.name.first}`
	} else {
		return `${this.name.first}`
	}
}

Greeter.prototype.greet = function() {
	console.log('hello ' + this.nameString());
}

if (process.argv.length > 2) {
	let greeter = new Greeter(process.argv[2], process.argv[3]);
	greeter.greet();
} else {
	console.log('I don\'t know who you are');
}

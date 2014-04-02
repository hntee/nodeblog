

function HasProperty(n) {
	var digits = n.toString().length;
	return Math.pow(n,2) % Math.pow(10,digits) == n;

}

for (var i = 1000; i < 99999999999; i++) {
	if (HasProperty(i)) {
		console.log(i);
	}
}
console.log('done')
// var a = 109376;
// console.log((a * a).toString())
// HasProperty(3 === '3');

// var n = 333;
// console.log(HasProperty(9376))
// console.log(Math.pow(10,4))
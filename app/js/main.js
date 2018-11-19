'use strict'

function expandedForm(num) {
	let str = '' + num;
	let result = '';

	if(num <= 0) return '' + num;

	for(let i = 0; i < str.length; i++) {
		if(str[i] == 0) continue;
		
		result += str[i] + '0'.repeat( str.length - 1 - i ) + '+';
	}

	return result.slice(0, result.length - 1)
}

console.log(expandedForm(-10));
console.log(expandedForm(0));
console.log(expandedForm(3));
console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
console.log(expandedForm(120470304));
String.prototype.camelCase=function(){
	return this.split(' ').map( (item) => item.charAt(0).toUpperCase() + item.slice(1) ).join('');
}

console.log( "hello case".camelCase() );//=> HelloCase
console.log( "camel case word".camelCase() );//=> CamelCaseWord
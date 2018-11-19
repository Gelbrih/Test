function domainName(str) {
	
	return str.match(/((https?\:\/\/)?(www\.)?)([a-zа-я0-9\-]+)?/i)[4];
}

console.log( domainName("http://github.com/carbonfive/raygun") );// == "github" 
console.log( domainName("http://www.zombie-bites.com") );// == "zombie-bites"
console.log( domainName("www.хакер.com") );// == "хакер"
console.log( domainName("https://www.cnet.com") );// == "cnet"
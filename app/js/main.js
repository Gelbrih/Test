var elem = document.querySelector(".wrap");
var elemText = elem.textContent.trim();

function firstLetterToUpperCase() {
	elem.textContent = elemText.charAt(0).toUpperCase() + elemText.slice(1); 
};

function allFirstLettersToUpperCase() {
	var wordsArr = elemText.split(" ");
	for(var i = 0; i<wordsArr.length; i++) {
		wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
	}
	elem.textContent = wordsArr.join(" ");
};
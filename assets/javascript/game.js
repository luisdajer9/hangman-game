var wordsList = ["animal", "reptile", "fish", "cat", "flowers"];
var wordArray = [];
var wordUArray = [];
var wordU = ""
var lives = 5;
var wins = 0;
var currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];

pullWord = function() {
	currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
}

setUnderline = function() {
	pullWord();
	for (i=0; i < currentWord.length; i++) {
		wordArray[i] = currentWord.charAt(i);
		wordUArray[i] = "_ ";
	}

	wordU = wordUArray.join("");
	document.getElementById("WORD").innerHTML = wordU;

}

updateLetter = function(letter) {
	var changes = 0;
	for(i=0; i < currentWord.length; i++) {
		wordArray[i] = currentWord.charAt(i);
		if(currentWord.charAt(i) == letter) {
			wordUArray[i] = letter;
			changes += 1;
		}
	}

	if(changes < 1) {
		lives -= 1;
		document.getElementById("numberOfLives").innerHTML = lives;
	}

	wordU = wordUArray.join("");
	document.getElementById("WORD").innerHTML = wordU;

	word1 = wordArray.join("");
	word2 = wordUArray.join("");

	if (word1 == word2) {
		alert("You won! Loading a new word.");
		window.location.reload();

	}

	if (lives < 1) {
		alert("You have run out of lives, try again.");
		window.location.reload();
	}

		
	// body...
}

pullWord();
setUnderline();


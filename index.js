/*
	Short-ID-Generator
	by Jannik Sommerfeld
*/

var valueToChar = function(value) {
	if (value > 9) {
		var asciiDec = 55 + value
		if (asciiDec > 90) {
			asciiDec += 6;
		}
		return String.fromCharCode(asciiDec)
	}
	else {
		return value.toString();	
	}
}

var valueToString = function(value) {
	var x = value % 62
	var y = Math.floor(value/62)

	if (y > 0) {
		return valueToString(y) + valueToChar(x)
	} else {
		return valueToChar(x)
	}
}

exports.generate = function () {
	var random = Math.floor(Math.random()*2000000000)+1000000
	return valueToString(random)
}

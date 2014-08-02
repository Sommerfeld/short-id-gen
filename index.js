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

exports.generate = function (minLength, maxLength) {

	// Validation Check
	if (minLength <= 0 || minLength > maxLength) {
		console.log(new Error('Invalid Values. (short-id-gen)'))
		return -1
	}

	// Default Length (0 params)
	if (typeof minLength === 'undefined') {
		minLength = 4
		maxLength = 6
	}

	// if exact length (1 param)
	if (typeof maxLength === 'undefined') {
        maxLength = minLength
    }

	var minRandom, maxRandom, random

	if (minLength == 1) {
		minRandom = 0 // as opposed to 1
	} else {
		minRandom = Math.pow(62, minLength - 1)
	}

	maxRandom = Math.pow(62, maxLength) - 1
	
	random = Math.floor(Math.random() * (maxRandom - minRandom) + minRandom)

	return valueToString(random)
}

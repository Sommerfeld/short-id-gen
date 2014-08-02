# short-ID-Generator (short-id-gen)

Build short IDs with numbers, uppercase- and lowercase-letters.

You can pass the number of characters (exact or min+max) as param(s).

This is a quick'n'dirty-tool. It's only used for public IDs - something like shortURLs - by my side.

## Install

	npm install short-id-gen --save

## Parameters

- () - 0 params -> Default lenght
- (x) - 1 param -> Exact length
- (x,y) - 2 params -> Min + max length

## Usage

	var shortID = require('short-id-gen')
	console.log(shortID.generate()) // zVe9op
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @raemekhatib/lotide`

**Require it:**

`const _ = require('@raemekhatib/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.head([1,2]) // => 1` 
cons results = 

## Documentation

The following functions are currently implemented:

* `head([array])`: passes in an array, and returns the first item that is in the index of the array [0];
* `tail([array])`: take in an array, and returns everything after index [0]; 
* `middle([array])`: takes in an array, and return the middle value if there is an odd number of values then it returns a single value, if there is an even number of values it returns the 2 middle values. However returns empty string if there is 0-2 values;
* `countLetters("string")`: takes in a string or sentence, and returns the letters encountered, as well as number of occurances of each letter;
* `countOnly(allItems, itemsToCount)`: take in two arguements, the first arguement is an array of strings that we need to look through, and the second arguement is an object specifying what to count ( ie , a list of names, and checking if that "name" occurs more than once, and returns  the name and how many occurances )
* `eqArrays([Array1],[Array2])`: takes in 2 arrays, and checks to see if Array1 = Array2, and returns true or false
* `eqObjects({Object1}, {Object2})`: takes in 2 objects and scans through the keys to confirm if they are equal, returns a true or false value
* `findKey({object}, callback)`: scans through object keys and return the first true value, returns key for given value through function (action) parameter.
* `findKeyByValue({object}, value)`: scans through an object key-value pair search for the matching "value" and returns the key 
* `letterPositions("string")`: takes in a string or sentence, and outputs the index of the letter occurances (the L in "Hello" => [2, 3])
* `map([array], callback)`: takes in an array and callback function, and returns a new modeified array based on action taken (ie [1,2] *2 will return [2,4])
* `takeUntil([array], callback)`: takes in an array and callback function, and pushes items into the array until the "break" value ( ie will push words from a sentence [1, 2, 5, 7, 2, -1, 2, 4, 5] until x < 0 so it stops at -1, returns [1, 2, 5, 7, 2])
* `without(items, itemsToRemove)`: takes in 2 values, the original string, and the stuff you want to remove ( ie input = [1,2,3] and remove: [1] so the  output will be [2,3])


let exercice = require('./uppercase.js');
let assert  = require('assert');

it('should return HELLO', function() {
	assert.equal('HELLO', exercice.toUpper('hello'));
});

it('should return WORLD', function() {
	assert.equal('WORLD', exercice.toUpper('world'));
});

//Solution
// return str.toUpperCase();

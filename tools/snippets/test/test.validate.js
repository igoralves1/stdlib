'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an `options` argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.strictEqual( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

// TODO: add tests

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {}; // TODO: add options

	err = validate( opts, options );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets options' );

	t.end();
});

tape( 'the function will ignore unrecognized options', function test( t ) {
	var options;
	var opts;
	var err;

	opts = {};
	options = {
		'beep': true,
		'boop': 'bop'
	};

	err = validate( opts, options );
	t.strictEqual( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'ignores unrecognized options' );

	t.end();
});

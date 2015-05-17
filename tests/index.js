var gs123 = require('../index.js');
var assert = require('assert');
require('mocha');

describe('genoset-123', function() {
	it('should match genomes that fulfill the criteria', function() {
		assert.equal(gs123(require('./fixtures/increased-risk.json')), true);
	});
	it('should not match genomes that do not fulfill the criteria', function() {
		assert.equal(gs123(require('./fixtures/normal-risk.json')), false);
	});
});

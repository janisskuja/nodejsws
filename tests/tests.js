/**
 * Created by Janis Skuja on 30.03.2014
 * Description: Tests the library for tests (useless and ridiculous, just an example)
 */

var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have the the should library installed and running for fluent testing.', function () {
        true.should.eql(true);
    })
})
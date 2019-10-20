const assert = require('assert');
const app = require('./app');

describe('Array []', function() {
    const result = app.underWater([]); 
    it('test empty array should return false', function() {
    assert.equal(result, false);
    });
});

describe('Array [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]', function() {
    const result = app.underWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]); 
    it('should return 17', function() {
    assert.equal(result, 17);
    });
});

describe('Array [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]', function() {
    const result = app.underWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]); 
    it('should return 10', function() {
    assert.equal(result, 10);
    });
});

describe('Array [7, 0, 1, 3, 4, 1, 2, 1]', function() {
    const result = app.underWater([7, 0, 1, 3, 4, 1, 2, 1]); 
    it('should return 9', function() {
    assert.equal(result, 9);
    });
});

describe('Array [2, 2, 1, 2, 2, 3, 0, 1, 2]', function() {
    const result = app.underWater([2, 2, 1, 2, 2, 3, 0, 1, 2]); 
    it('should return 4', function() {
    assert.equal(result, 4);
    });
});

describe('Array [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]', function() {
    const result = app.underWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]); 
    it('should return 24', function() {
    assert.equal(result, 24);
    });
});

describe('Array [2, 2, 2, 2, 2]', function() {
    const result = app.underWater([2, 2, 2, 2, 2]); 
    it('should return 0', function() {
    assert.equal(result, 0);
    });
});

describe('Array [6, 1, 6, 1, 6]', function() {
    const result = app.underWater([6, 1, 6, 1, 6]); 
    it('should return 10', function() {
    assert.equal(result, 10);
    });
});

describe('Array [9, 1, 6, 1, 6]', function() {
    const result = app.underWater([6, 1, 6, 1, 6]); 
    it('should return 10', function() {
    assert.equal(result, 10);
    });
});


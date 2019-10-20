const assert = require('assert');
const app = require('./app');

describe('Array []', function() {
    const result = app.reviewArray([]); 
    it('test empty array should return false', function() {
    assert.equal(result, false);
    });
});
describe('object { foo: "bar" }', function() {
    const result = app.reviewArray({ foo: "bar" }); 
    it('test object should return false', function() {
    assert.equal(result, false);
    });
});
describe('String "qwerty"', function() {
    const result = app.reviewArray("qwerty"); 
    it('test string should return false', function() {
        assert.equal(result, false);
    });
});
describe('Array ["foo","bar"]', function() {
    const result = app.reviewArray(["foo","bar"]); 
    it('test array with all NaN should return false', function() {
        assert.equal(result, false);
    });
});
describe('Array [1, 2, 3]', function() {
    const result = app.reviewArray([1, 2, 3]); 
    it('find max should return 3', function() {
    assert.equal(result.max, 3);
    });
    it('find min should return 1', function() {
    assert.equal(result.min, 1);
    });
    it('calc sum should return 6', function() {
    assert.equal(result.sum, 6);
    });
});
describe('Array [, 2, 3]', function() {
    const result = app.reviewArray([, 2, 3]); 
    it('find max should return 3', function() {
    assert.equal(result.max, 3);
    });
    it('find min should return 2', function() {
    assert.equal(result.min, 2);
    });
    it('calc sum should return 5', function() {
    assert.equal(result.sum, 5);
    });
});
describe('Array [-1,-8,-2]', function() {
    const result = app.reviewArray([-1,-8,-2]); 
    it('find max should return -1', function() {
    assert.equal(result.max, -1);
    });
    it('find min should return -8', function() {
    assert.equal(result.min, -8);
    });
    it('calc sum should return -11', function() {
    assert.equal(result.sum, -11);
    });
});
describe('Array [1,7,3]', function() {
    const result = app.reviewArray([1,7,3]); 
    it('find max should return 7', function() {
    assert.equal(result.max, 7);
    });
    it('find min should return 1', function() {
    assert.equal(result.min, 1);
    });
    it('calc sum should return 5', function() {
    assert.equal(result.sum, 11);
    });
});
describe('Array [1,undefined,3,5,-3]', function() {
    const result = app.reviewArray([1,undefined,3,5,-3]); 
    it('find max should return 5', function() {
    assert.equal(result.max, 5);
    });
    it('find min should return -3', function() {
    assert.equal(result.min, -3);
    });
    it('calc sum should return 6', function() {
    assert.equal(result.sum, 6);
    });
});
describe('Array [1,NaN,3,5,-3]', function() {
    const result = app.reviewArray([1,NaN,3,5,-3]); 
    it('find max should return 5', function() {
    assert.equal(result.max, 5);
    });
    it('find min should return -3', function() {
    assert.equal(result.min, -3);
    });
    it('calc sum should return 6', function() {
    assert.equal(result.sum, 6);
    });
});
describe('Array [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]', function() {
    const result = app.reviewArray([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]); 
    it('find max should return 44', function() {
    assert.equal(result.max, 44);
    });
    it('find min should return -12', function() {
    assert.equal(result.min, -12);
    });
    it('calc sum should return 32', function() {
    assert.equal(result.sum, 32);
    });
});
describe('swap max & min Array [1,2,3]', function() {
    const result = app.swapPlaces([1,2,3]); 
    it('should return Array [3,2,1]', function() {
    assert.deepEqual(result, [3,2,1]);
    });
});
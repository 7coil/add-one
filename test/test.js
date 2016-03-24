var addOne = require('../index.js');

var Code = require('code')
var Lab = require('lab')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('add-one', function () {
  it('should return the integer with one added to it', function (done) {
    expect(addOne(1)).to.equal(2);
    done()
  });

  it('should throw an exception if a non integer is provided', function(done) {
    const throws = function () { addOne('foobar'); }
    expect(throws).to.throw(Error, "Not an integer.");
    done();
  })
});

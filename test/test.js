require('chai/register-assert');  // Using Assert style
require('chai/register-expect');  // Using Expect style
require('chai/register-should');  // Using Should style

// import 'chai/register-assert';  // Using Assert style
// import 'chai/register-expect';  // Using Expect style
// import 'chai/register-should';  // Using Should style
var assert = require('assert');
// var growl = require('growl')
// growl('You have mail!')

setTimeout(function() {
  // do some setup

  describe('my suite', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  // run();
}, 500);
beforeEach ('root each', function () {
  // global leak detected: 'aa'
  // --check-leaks --global=aa
  // aa = 123
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('double done', function(done) {
      // Calling `done()` twice is an error
      done()
      // done()
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});

function User (name) {
  this.name = name
}
User.prototype.save = function (callback) {
  setTimeout(() => {
    callback()
    // callback(new Error('ahah'))
  })
}

describe('hooks', function() {
  before(function() {
    console.log('before')
  });

  after(function() {
    console.log('after')
  });

  beforeEach(function() {
    console.log('beforeEach')
  });

  afterEach(function() {
    console.log('afterEach')
  });

  it('test hooks', function (done) {
    done()
  })
  it('test hooks2', function (done) {
    done()
  })
});

describe('Array', function() {
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});

describe('inclusive test', function() {
  // describe.only('#indexOf()', function() {
  //   it('should return -1 when the value is not present');
  // });
  // it.only('should return -1 unless present', function() {
  //   // ...
  // });
  // it.only('should return the index when present', function() {
  //   // this test will also be run
  // });
  it('should only test in the correct environment1', function() {
    if (1 !== 1) {
      // make assertions
    } else {
      this.skip();
      assert(1===22)
    }
  });
});

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done) {
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done) {
    setTimeout(done, 250);
  });
});

describe('long string', function () {
  it('fail', function () {
    let string = `
      .red {
        color: red;
      }
    `
    let string2 = `
      .red {
        color: green;
      }
    `
    assert.equal(string, string2)
    assert.notEqual(string, string2)
  })
})
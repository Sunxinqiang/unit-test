require('chai/register-assert');  // Using Assert style
require('chai/register-expect');  // Using Expect style
require('chai/register-should');  // Using Should style

// import 'chai/register-assert';  // Using Assert style
// import 'chai/register-expect';  // Using Expect style
// import 'chai/register-should';  // Using Should style
var assert = require('assert');

describe('test3', function () {
  it('test3 should fail', function () {
    assert.equal('1', '2')
  })
})
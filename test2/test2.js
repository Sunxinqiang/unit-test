require('chai/register-assert');  // Using Assert style
require('chai/register-expect');  // Using Expect style
require('chai/register-should');  // Using Should style

// import 'chai/register-assert';  // Using Assert style
// import 'chai/register-expect';  // Using Expect style
// import 'chai/register-should';  // Using Should style
var assert = require('assert');

describe('test2', function () {
  it('test2 should fail', function () {
    assert.equal('1', '2')
  })
})
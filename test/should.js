var should = require('should');
var Assertion = require('should').Assertion;

(5).should.be.a.a.a.a.a.exactly(5).and.be.a.Number();

should.Assertion.add('sameValue', function () {
  should(Object.is(this.obj, true)).be.exactly(true);
})
should.Assertion.add('true', function() {
  this.params = { operator: 'to be true', expected: true };

  should(this.obj).be.exactly(true);
});

Assertion.add('isObj', function() {
  this.params = { operator: '是个对象' }

  this.obj.should.have.property('id').which.is.a.Number()
  this.obj.should.have.property('path')
})

let hasId = function () {
  this.obj.should.have.property('id')
}
let hasPath = function () {
  this.obj.should.have.property('path')
}
Assertion.addChain('hasId', hasId)
Assertion.addChain('hasPath', hasPath)

Assertion.alias('hasPath', 'haspath')

describe('should test', function () {
  it('Assertion add', function () {
    (true).should.be.true();
  })
  it('sameValue', function () {
    (true).should.be.sameValue();
  })
  it('isObj', function () {
    ({id: 123, path: ''}).should.be.isObj();
  })
  it('testChain', function () {
    ({id: 123, path: ''}).should.hasId.hasPath;
    ({id: 123, path: ''}).should.hasId.haspath;
  })

})
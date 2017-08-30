const assert = require('chai').assert;
const validate = require('../lib/validate');

const req = {};

describe('Form Validation', function() {
    describe('Empty Fields', function() {
        before(function (){
            req.body = {
                name: '',
                email: '',
                subject: '',
                body: ''
            };
        });
        it('Responds with Name Required', function(done) {
            assert.equals(validate(req)[0].msg, 'Name Required');
        });
    });
})
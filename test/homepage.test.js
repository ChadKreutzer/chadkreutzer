const request = require('supertest');
const app = require('../app');

describe ('Homepage', function () {
    it('Welcomes the user', function(done) {
        request(app).get('/')
            .expect(200, done);
    });
})
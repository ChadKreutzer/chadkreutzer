const host = require('../test_host');
const request = require('supertest');
const agent = request.agent(host);

describe('Homepage', function() {
    it('Responds with HTML', function(done) {
        agent
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
});

describe('Projects', function() {
    describe('Bootstrap Calculator', function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/bs-calc/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
    describe(`Caesar's Cipher`, function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/caesar-cipher/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
    describe('Pomodoro Clock', function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/pomodoro/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
    describe('Random Quotes', function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/random-quotes/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
    describe('Widdle Waskles', function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/widdle-waskles/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
    describe('Wikipedia Viewer', function() {
        it('Responds with HTML', function(done) {
            agent
                .get('/projects/wikiview/')
                .set('Accept', 'text/html')
                .expect('Content-Type', /html/)
                .expect(200, done);
        });
    });
})
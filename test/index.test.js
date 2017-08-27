const request = require('supertest');
const express = require('express');

const app = require('../app');

describe('Index Page', function () {
    it("renders successfully", function (done) {
        request(app).get('/').expect(200, done);
    });
});
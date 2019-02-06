const request = require('supertest');
const assert = require('chai').assert;

const server = require('../app');

describe('Test Rest List Surah', function() {

    describe('Get /', function() {

        it('Should return array object and status 200', (done) => {

            request(server).get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                assert.typeOf(res.body.surah_info, 'array', 'we have an array');
            })
            .end(function(err, res){
                if(err) return done(err)
                done()
            })
        })
    });

    describe('Get /surah ', () => {
        it('should return one surah in object and status 200', (done) => {

            request(server).get('/surah/114')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(function(res) {

                assert.typeOf(res.body, 'object', 'We have an object');

            }).end(function(err, res) {
                if (err) return done(err)
                done();
            });
        });
    });
});
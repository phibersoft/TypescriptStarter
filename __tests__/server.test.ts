import app from "../src/server";
import supertest from "supertest";
import assert from "assert";


describe('App', () => {
    let request: supertest.SuperTest<supertest.Test>;

    beforeEach(() => {
        request = supertest(app);
    });

    it('Should return a hello message for GET /', done => {
        request
            .get('/')
            .expect(200)
            .then(resp => {
                assert(resp.body.message, 'Hello World!')
                done();
            })
            .catch(done)
    })
})

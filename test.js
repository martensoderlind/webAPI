const assert = require("assert");
const requst = require("supertest");

describe("developer API should have endpoints to", ()=>{
    it("get all developers",()=>{
        const api = require("./api.js");

        requst(api.app)
            .get('/api/developers')
            .set('Accept', 'application/json')
            .expect('content-type',/json/)
            .expect(200,done)
    });
})
process.env.ENV = "test";
let chai = require('chai');
let expect = chai.expect;
let chaiHttp =require('chai-http');
chai.use(chaiHttp);
let server = 'http://localhost:3000';

describe('Test Users Controller',function () {
    it('should have a json data and have tutorials on findAll', function (done) {
        chai.request(server)
            .get('/api/users')
            .end((err,res)=>{
                expect(res.body).to.be.a('array');
                expect(res.body[0]).to.have.property('tutorials');
                expect(res.body[0].tutorials).to.be.a('array');
                expect(res.body[0]).to.have.property('firstName');
                expect(res.body[0]).to.have.property('lastName');
                expect(res.body[0]).to.have.property('email');
                done();
            })
    });
    it('should create and get a json data', function (done) {
        chai.request(server)
            .post('/api/users')
            .send({
                'firstName':'Test It',
                'lastName':'mbuthia',
                'email':'dambuthia@outlook.com',
                'password':'123456'
            })
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('firstName');
                expect(res.body).to.have.property('lastName');
                expect(res.body).to.have.property('email');
                done();
            });
    });
    it('should not create a user without email', function (done) {
        chai.request(server)
            .post('/api/users')
            .send({
                'firstName':'Test It',
                'lastName':'mbuthia',
                'password':'123456'
            })
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                done();
            });
    });
    it('should get json and have a tutorials', function (done) {
        let id = 1;
        chai.request(server)
            .get("/api/user/"+id)
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('tutorials');
                expect(res.body.tutorials).to.be.a('array');
                expect(res.body).to.have.property('firstName');
                expect(res.body).to.have.property('lastName');
                expect(res.body).to.have.property('email');
                done();
            })
    });
});

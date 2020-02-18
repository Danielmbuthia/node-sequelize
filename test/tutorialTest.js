 process.env.ENV = "test";
let chai = require('chai');
let expect = chai.expect;
let chaiHttp =require('chai-http');
chai.use(chaiHttp);
let server = 'http://localhost:3000';

describe('Tutorial controller tests',function () {
 it('should get json data on findAll', (done) => {
     chai.request(server)
         .get('/api/tutorials')
         .end((err, res)=> {
             expect(res.body).to.be.a('array');
             expect(res.body[0]).to.have.property('title');
             expect(res.body[0]).to.have.property('description');
             expect(res.body[0]).to.have.property('published');
           done();
         });
 });
 it('should have a title and return object data on create', (done) => {
    chai.request(server)
        .post('/api/tutorials')
        .send({
            'title':'Test',
            'published':true,
            'description':' Test '
        })
        .end((err,res)=>{
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('title');
            expect(res.body).to.have.property('description');
            expect(res.body).to.have.property('published');
            done();
        });
 });
    it('should not post a tutorial without title ', function (done) {
        chai.request(server)
            .post('/api/tutorials')
            .send({
                'published':true,
                'description':' Test '
            })
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                done();
            });
    });
    it('should get a single tutorial', function (done) {
        var data={
          id:1
        };
        chai.request(server)
            .get('/api/tutorials/'+data.id)
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('title');
                expect(res.body).to.have.property('description');
                expect(res.body).to.have.property('published');
                done();
            });
    });
    it('should be able to update', function (done) {
        var data ={
            id:1
        };
        chai.request(server)
            .put('/api/tutorials/'+data.id)
            .send({
                'title':'sequelize update',
                'published':false,
                'description':'test updated'
            })
            .end((err,res)=>{
                expect(res.body).to.be.a('object');
                expect(res).to.have.status(200);
                done();
            });
    });
});
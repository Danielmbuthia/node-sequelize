let chai = require('chai');
let expect = chai.expect;
chai.use(require('sinon-chai'));
const {
    sequelize,
    dataTypes,
    checkModelName,
    checkUniqueIndex,
    checkPropertyExists
} = require('sequelize-test-helpers');
const UserModel = require('../../models/user');
describe('Test user Model association',function () {
            const User = UserModel(sequelize, dataTypes);
            const user = new User();

            checkModelName(User)('user');

            context('properties', () => {
                ['firstName', 'lastName', 'email', 'password'].forEach(
                    checkPropertyExists(user)
                )
            });

            context('associations', () => {
                const tutorial ={
                    title:"teste",
                    description:"dscsadcasdc",
                    published:true,
                    user_id:1
                };

                before(() => {
                    User.associate({tutorial});
                });

                it('defined a hasMay association with tutorial', () => {
                    expect(User.hasMany).to.have.been.calledWith(tutorial)
                })
            })
        });

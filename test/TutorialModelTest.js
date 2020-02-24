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
const TutorialModel = require('../models/tutorial');
describe('Test Tutorial Model association',function () {
    const Tutorial = TutorialModel(sequelize, dataTypes);
    const tutorial = new Tutorial();

    checkModelName(Tutorial)('tutorial');

    context('properties', () => {
        ['title', 'description', 'published'].forEach(
            checkPropertyExists(tutorial)
        )
    });

    context('associations', () => {
        const user ={
            firstName:"teste",
            lastName:"dscsadcasdc",
            email:true
        };

        before(() => {
            Tutorial.associate({user});
        });

        it('defined a belongsTo association with tutorial', () => {
            expect(Tutorial.belongsTo).to.have.been.calledWith(user)
        })
    })
});

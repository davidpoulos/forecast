const sinon = require('sinon');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

const User = require('../../../src/model/user');

describe('Services - User Creation Unit Tests', () => {
    before(() => {

    });

    after(() => {

    });

    it('Create New User', () => {
        const newUser = {
            username: 'davidpoulos',
            password: 'fakepassword',
            type: 'ADMIN'
        }
    });

    it('Create User with missing Mongo fields', () => {

    });


    it('Duplicate user Check', () => {

    });
});
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

const { encryptPassword } = require('../../../src/utils/encryption');

describe('Password Encryption Tests', () => {
    
	it('Password as string is successfully encrypted', async () => {
		const VALID_PASS = 'nacho';
		const encryptedPass = await encryptPassword(VALID_PASS);
		expect(encryptedPass).to.not.equal(VALID_PASS);
	
	});
    
	it('Throw Promise.reject if Int/undefined password entered', () => {
		const INVALID_PASS = 3;
		return expect(encryptPassword(INVALID_PASS)).to.eventually.be.rejectedWith(Error);
	});
    
});
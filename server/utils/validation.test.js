const expect = require('expect');
const {isRealString} = require('./validation');

// isRealString
	// should reject non-string values
	// should reject string with only sapces
	// should allow string with nonspace characters


describe('isRealString', () => {
	it('should reject non-string values', () => {
		let message = isRealString(9);
		expect(message).toBeFalsy();
	});

	it("should reject string with only spaces", () => {
		let message = isRealString('     ');
		expect(message).toBeFalsy();
	});

	it("should allow string with nonspace characters", () => {
		let message = isRealString('    Fred    ');
		expect(message).toBeTruthy();
	});
})
const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
	it('Should generate the correct message object', () => {
		let from = 'fred';
		let text = 'hello world';
		let message = generateMessage(from, text);

		expect(message).toMatchObject({from, text});
		expect(typeof message.createdAt).toEqual('number');
	});
});
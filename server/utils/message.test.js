const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('Should generate the correct message object', () => {
		let from = 'fred';
		let text = 'hello world';
		let message = generateMessage(from, text);

		expect(typeof message.createdAt).toEqual("number");
		expect(message).toMatchObject({from, text});
	});
});

describe('generateLocationMessage', () => {
	it('Should generate correct location object', () => {
		let from = 'Fred';
		let lat = 1;
		let long = 1;
		let url = `https://www.google.com/maps?q=${lat},${long}`;
		let location = generateLocationMessage(from, lat, long);

		expect(typeof location.createdAt).toEqual("number");
		expect(location).toMatchObject({from, url});
	});
});
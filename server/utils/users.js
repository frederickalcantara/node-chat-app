const _ = require('lodash');

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.users = [];
	}
	addUser (id, name, room) {
		let user = {id, name, room};
		this.users.push(user);
		return user;
	}
	removeUser (id) {
		// return user that was removed
		let user = this.getUser(id);

		if (user) {
			return user = _.remove(this.users, { id });
		}

		return user;

	}
	getUser (id) {
		return this.users.find((user) => user.id === id);
	}
	getUserList (room) {
		let users = this.users.filter((user) => user.room === room);
		let namesArray = users.map((user) => user.name);

		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old.`;
// 	}
// }

// let me = new Person('Fred', 23);

// let description = me.getUserDescription();
// console.log(description);
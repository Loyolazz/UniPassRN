import DB from './db.json';

class Api {
	getUsers() {
		return DB.users;
	}

	getUserByUsername(username) {
		const userIndex = DB.users.findIndex((item) => item.username === username);

		const user = DB.users[userIndex];

		return user;
	}

	getUserCourses(username) {
		const userIndex = DB.users.findIndex((item) => item.username === username);

		const userCoursesIds = DB.users[userIndex].courses;

		const userCourses = [];

		userCoursesIds.forEach((item) => {
			this.getCourses().forEach((i) => {
				if (i.id === item) {
					userCourses.push(i);
				}
			});
		});

		return userCourses;
	}

	setUserCourses(username) {}

	getBanners() {
		return DB.banners;
	}

	getFaq() {
		return DB.faq;
	}

	getLocations() {
		return DB.locations;
	}

	setLocations([state, city]) {}

	getCourses() {
		return DB.courses;
	}

	setCourse(data) {}

	updadeCourse(data) {}
}

export const api = new Api();

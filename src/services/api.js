import DB from './db.json';
import { storage } from './storage.js';

class Api {
	getUser() {
		return DB.user;
	}

	getUserCourses(onlyIds) {
		const hasUserCourses = storage.contains('user.courses');

		if (onlyIds) {
			return hasUserCourses ? JSON.parse(storage.getString('user.courses')) : null;
		} else {
			if (!hasUserCourses) return null;
			
			const ids = JSON.parse(storage.getString('user.courses'));

			const objectUserCourses = [];

			DB.courses.forEach((course) => {
				if (ids.includes(course.id)) {
					objectUserCourses.push(course);
				}
			});

			return objectUserCourses;
		}
	}

	setUserCourses(courseId) {
		const hasUserCourses = storage.contains('user.courses');

		if (!hasUserCourses) {
			storage.set('user.courses', JSON.stringify([courseId]));
		}

		if (hasUserCourses) {
			const _getUserCourses = JSON.parse(storage.getString('user.courses'));

			if (!_getUserCourses.includes(courseId)) {
				_getUserCourses.push(courseId);

				storage.set('user.courses', JSON.stringify(_getUserCourses));
			}
		}
	}

	getBanners() {
		return DB.banners;
	}

	getFaq() {
		return DB.faq;
	}

	getLocations() {
		return DB.locations;
	}

	getCourses() {
		return DB.courses;
	}

	clearStorage() {
		storage.clearAll();
	}
}

export const api = new Api();

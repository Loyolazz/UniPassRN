import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../../assets/Colors';

import { Home } from './Home';
import { SelectLocation } from './SelectLocation';
import { Courses } from './Courses';
import { MyCourses } from './MyCourses';
import { CourseInfo } from './CourseInfo';
import { Profile } from './Profile';
import { Workload } from './Workload';
import { Faq } from './Faq';

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: Colors.bluePrimary,
				}}
			/>
			<Stack.Screen
				name="SelectLocation"
				component={SelectLocation}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: 'white',
				}}
			/>
			<Stack.Screen
				name="Courses"
				component={Courses}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: 'white',
				}}
			/>
			<Stack.Screen
				name="MyCourses"
				component={MyCourses}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: 'white',
				}}
			/>
			<Stack.Screen
				name="CourseInfo"
				component={CourseInfo}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: 'white',
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: 'white',
				}}
			/>
			<Stack.Screen
				name="Workload"
				component={Workload}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: Colors.gray,
				}}
			/>
			<Stack.Screen
				name="Faq"
				component={Faq}
				options={{
					animation: 'slide_from_right',
					navigationBarColor: Colors.bluePrimary,
				}}
			/>
		</Stack.Navigator>
	);
}

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './Home';
import { Profile } from './Profile';
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
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					animation: 'slide_from_right',
				}}
			/>
			<Stack.Screen
				name="Faq"
				component={Faq}
				options={{
					animation: 'slide_from_right',
				}}
			/>
		</Stack.Navigator>
	);
}

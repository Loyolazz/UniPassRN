import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './Login';
import ProfessorRoutes from './Professor/routes';
import StudentRoutes from './Student/routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						animation: 'slide_from_right',
					}}
				/>
				<Stack.Screen
					name="Student"
					component={StudentRoutes}
					options={{
						animation: 'slide_from_bottom',
					}}
				/>
				<Stack.Screen
					name="Professor"
					component={ProfessorRoutes}
					options={{
						animation: 'slide_from_bottom',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/screens/routes';

import Colors from './src/assets/Colors';

export default function App() {
	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: '#000' }}>
			<SafeAreaProvider style={{ flex: 1, backgroundColor: '#000' }}>
				<StatusBar backgroundColor={Colors.bluePrimary} barStyle="light-content" />
				<Routes />
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}

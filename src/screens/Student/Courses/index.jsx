import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '../../../assets/Icons/logo.png';

import { styles } from './styles';

import { Header } from '../../../components/Header';

import { courses } from '../../../services/db.json';

const courseStatus = ['active', 'inscripted', 'finished'];

export function Courses({ navigation }) {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Header
					navigation={navigation}
					title="Escolha seu curso/Atividade"
					titleStyle={{
						fontSize: 20,
					}}
				/>

				<ScrollView
					style={{ width: '100%' }}
					contentContainerStyle={styles.scrollView}
					decelerationRate={0.5}
					showsVerticalScrollIndicator={false}
				>
					{courses.map((value) => {
						return (
							<TouchableOpacity
								key={value.id}
								style={styles.buttonCourse}
								activeOpacity={0.8}
								onPress={() => {
									navigation.navigate('CourseInfo', {
										data: value,
										status: courseStatus[getRandomInt(0, courseStatus.length)],
									});
								}}
							>
								<View style={styles.boxImageButtonLogo}>
									<Image source={Logo} style={styles.imageButtonLogo} resizeMode="center" />
								</View>

								<Text style={styles.textButton}>{value.title}</Text>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

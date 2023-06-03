import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';

import Logo from '../../../assets/Icons/logo.png';

import { styles } from './styles';

import { Header } from '../../../components/Header';

const dataCourses = [
	'Café com Código: Introduçao ao React',
	'Café com Código: Introduçao ao Python',
	'GEEK EVENT 1',
	'GEEK EVENT 2',
	'GEEK EVENT 3',
	'GEEK EVENT 4',
];

const courseStatus = ['active', 'inscripted', 'finished'];

export function Courses({ navigation }) {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
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
				{dataCourses.map((value) => {
					return (
						<TouchableOpacity
							key={value}
							style={styles.buttonCourse}
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('CourseInfo', {
									title: value,
									status: courseStatus[getRandomInt(0, courseStatus.length)],
								});
							}}
						>
							<View style={styles.boxImageButtonLogo}>
								<Image source={Logo} style={styles.imageButtonLogo} resizeMode="center" />
							</View>

							<Text style={styles.textButton}>{value}</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>
		</View>
	);
}

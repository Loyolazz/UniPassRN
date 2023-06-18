import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';

import Logo from '../../../assets/Icons/logo.png';

import { styles } from './styles';

import { Header } from '../../../components/Header';

import { api } from '../../../services/api';

const certStatus = [
	'cert-available',
	'cert-not-available',
	'cert-not-available',
	'cert-available',
	'cert-not-available',
	'cert-not-available',
	'cert-available',
	'cert-available',
	'cert-available',
	'cert-not-available',
	'cert-available',
	'cert-not-available',
	'cert-not-available',
	'cert-available',
	'cert-available',
	'cert-available',
];

export function MyCourses({ navigation }) {
	const [dataCourses, setDataCourses] = React.useState([]);

	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	};

	React.useEffect(() => {
		setDataCourses(api.getUserCourses());
	}, []);

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
				{dataCourses?.map((value) => {
					return (
						<TouchableOpacity
							key={value.id}
							style={styles.buttonCourse}
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('CourseInfo', {
									data: value,
									certificate: certStatus[getRandomInt(0, certStatus.length)],
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
	);
}

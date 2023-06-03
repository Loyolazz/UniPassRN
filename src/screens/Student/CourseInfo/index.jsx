import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

import { Header } from '../../../components/Header';
import { CourseSheetInfo } from '../../../components/CourseSheetInfo';

export function CourseInfo({ navigation, route }) {
	const course = route.params;

	return (
		<View style={styles.container}>
			<Header navigation={navigation} title="Sobre o Evento" />

			<Text style={styles.textCourseTitle}>{course.title}</Text>

			<CourseSheetInfo />

			<Text style={styles.textTitleResume}>Resumo</Text>
			<Text style={styles.textResume}>
				Formação profissionalizante gratuita em artes cênicas para jovens e adultos na modalidade
				presencial e oratória.
			</Text>

			<CourseStatus course={course} />
		</View>
	);
}

function CourseStatus({ course }) {
	if (course.status && course.status === 'active') {
		return (
			<TouchableOpacity
				style={{
					backgroundColor: Colors.yellowPrimary,
					paddingVertical: 6,
					paddingHorizontal: 50,
					borderRadius: 8,
					marginVertical: 50,
				}}
				activeOpacity={0.8}
				onPress={() => {}}
			>
				<Text style={{ fontFamily: Fonts.bold, fontSize: 22, color: Colors.bluePrimary }}>
					Confirmar Inscrição
				</Text>
			</TouchableOpacity>
		);
	}

	if (course.status && course.status === 'inscripted') {
		return (
			<View
				style={{
					paddingVertical: 6,
					paddingHorizontal: 50,
					borderRadius: 8,
					marginVertical: 50,
				}}
			>
				<Text style={{ fontFamily: Fonts.bold, fontSize: 22, color: 'green' }}>
					Inscrição Confirmada
				</Text>
			</View>
		);
	}

	if (course.status && course.status === 'finished') {
		return (
			<View
				style={{
					paddingVertical: 6,
					paddingHorizontal: 50,
					borderRadius: 8,
					marginVertical: 50,
				}}
			>
				<Text style={{ fontFamily: Fonts.bold, fontSize: 22, color: 'red' }}>
					Inscrições Encerradas
				</Text>
			</View>
		);
	}
}

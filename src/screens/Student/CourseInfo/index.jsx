import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import IconCheckOk from '../../../assets/Icons/icon-check-ok.png';
import IconCheckNot from '../../../assets/Icons/icon-check-not.png';
import IconDownCheckOk from '../../../assets/Icons/icon-down-check-ok.png';
import IconDownCheckNot from '../../../assets/Icons/icon-down-check-not.png';

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

	if (course.status && course.status === 'cert-available') {
		return (
			<View
				style={{
					width: '90%',
					flexDirection: 'row',
					marginVertical: 30,
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						aspectRatio: 1.5,
						width: '50%',
						backgroundColor: '#18B815',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 5,
					}}
				>
					<View style={{ aspectRatio: 1, width: 40, marginBottom: 10 }}>
						<Image
							style={{ width: '100%', height: '100%' }}
							source={IconCheckOk}
							resizeMode="center"
						/>
					</View>

					<Text
						style={{ fontFamily: Fonts.regular, fontSize: 20, color: 'white', textAlign: 'center' }}
					>
						Certificado
					</Text>
				</View>

				<View
					style={{
						width: '50%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity
						activeOpacity={0.8}
						style={{
							aspectRatio: 1,
							width: '40%',
						}}
					>
						<Image
							style={{ width: '100%', height: '100%' }}
							source={IconDownCheckOk}
							resizeMode="center"
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	if (course.status && course.status === 'cert-not-available') {
		return (
			<View
				style={{
					width: '90%',
					flexDirection: 'row',
					marginVertical: 30,
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						aspectRatio: 1.5,
						width: '50%',
						backgroundColor: '#FF0000',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 5,
					}}
				>
					<View style={{ aspectRatio: 1, width: 40, marginBottom: 10 }}>
						<Image
							style={{ width: '100%', height: '100%' }}
							source={IconCheckNot}
							resizeMode="center"
						/>
					</View>

					<Text
						style={{ fontFamily: Fonts.regular, fontSize: 20, color: 'white', textAlign: 'center' }}
					>
						Certificado Não Disponível
					</Text>
				</View>

				<View
					style={{
						width: '50%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<TouchableOpacity
						activeOpacity={0.8}
						style={{
							aspectRatio: 1,
							width: '40%',
						}}
					>
						<Image
							style={{ width: '100%', height: '100%' }}
							source={IconDownCheckNot}
							resizeMode="center"
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

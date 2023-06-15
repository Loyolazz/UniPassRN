import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import IconAddCourse from '../../../assets/Icons/icon-add-course.png';

import { styles } from './styles';

import { Header } from '../../../components/Header';
import Fonts from '../../../assets/Fonts';

export function Workload({ navigation }) {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} title="Carga Horária" />

			<View style={styles.containerProgress}>
				<View style={styles.boxProgress}>
					<CircularProgress
						value={40}
						maxValue={120}
						progressValueStyle={{ fontFamily: Fonts.bold, fontSize: 20, color: 'white' }}
						title="HORAS"
						titleStyle={{ fontFamily: Fonts.bold, fontSize: 20, color: 'white' }}
						valueSuffix="/120"
						valueSuffixStyle={{ fontFamily: Fonts.bold, fontSize: 20, color: 'white' }}
						activeStrokeColor="#52FF00"
						inActiveStrokeColor="#FF0000"
						inActiveStrokeWidth={6}
						radius={80}
						duration={1000}
					/>
				</View>

				<View style={styles.containerCaptions}>
					<View style={styles.boxCaptions}>
						<View
							style={{
								aspectRatio: 1,
								width: 20,
								backgroundColor: '#52FF00',
								borderRadius: 100,
							}}
						/>

						<Text style={styles.textCaptions}>Concluído</Text>
					</View>

					<View style={styles.boxCaptions}>
						<Text style={styles.textCaptions}>A concluir</Text>

						<View
							style={{
								aspectRatio: 1,
								width: 20,
								backgroundColor: '#FF0000',
								borderRadius: 100,
							}}
						/>
					</View>
				</View>
			</View>

			<View style={styles.containerAddCourse}>
				<Text style={styles.textAddCourse}>Cursos / Atividades</Text>

				<TouchableOpacity activeOpacity={0.8} style={styles.boxIconAddCourse}>
					<Image source={IconAddCourse} style={styles.iconAddCourse} resizeMode="center" />
				</TouchableOpacity>
			</View>

			<View style={styles.containerCertificates}></View>
		</View>
	);
}

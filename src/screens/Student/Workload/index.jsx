import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import IconAddCourse from '../../../assets/Icons/icon-add-course.png';
import IconCertificateAnalysis from '../../../assets/Icons/icon-certificate-analysis.png';
import IconCertificateAdded from '../../../assets/Icons/icon-certificate-added.png';
import IconCertificateNotAdded from '../../../assets/Icons/icon-certificate-not-added.png';

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

			<View style={styles.containerCertificates}>
				<Text style={styles.textCertificates}>Certificados</Text>

				<ScrollView
					style={{ width: '90%', alignSelf: 'center' }}
					contentContainerStyle={{ paddingBottom: 30, gap: 10 }}
					showsVerticalScrollIndicator={false}
				>
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
					<Certificate />
				</ScrollView>

				<View style={styles.containerCertCaptions}>
					<View style={styles.boxCaptions}>
						<View style={{ aspectRatio: 1, width: 21 }}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={IconCertificateAdded}
								resizeMode="center"
							/>
						</View>

						<Text style={styles.textCertCaptions}>Adicionado</Text>
					</View>

					<View style={styles.boxCaptions}>
						<View style={{ aspectRatio: 1, width: 25 }}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={IconCertificateAnalysis}
								resizeMode="center"
							/>
						</View>

						<Text style={styles.textCertCaptions}>Em análise</Text>
					</View>

					<View style={styles.boxCaptions}>
						<View style={{ aspectRatio: 1, width: 21 }}>
							<Image
								style={{ width: '100%', height: '100%' }}
								source={IconCertificateNotAdded}
								resizeMode="center"
							/>
						</View>

						<Text style={styles.textCertCaptions}>Não adicionado</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const Certificate = () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Text
				style={{
					fontFamily: Fonts.bold,
					fontSize: 20,
					color: '#0C264F',
				}}
				numberOfLines={1}
			>
				Avaliação Institucional
			</Text>

			<Text
				style={{
					fontFamily: Fonts.bold,
					fontSize: 20,
					color: '#0C264F',
				}}
			>
				3H
			</Text>

			<View style={{ aspectRatio: 1, width: 40 }}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={IconCertificateAnalysis}
					resizeMode="center"
				/>
			</View>
		</View>
	);
};

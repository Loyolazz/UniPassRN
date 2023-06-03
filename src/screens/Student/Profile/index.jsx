/* eslint-disable indent */
import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import { styles } from './styles';

import IconLogout from '../../../assets/Icons/icon-logout.png';
import IconDefaultProfile from '../../../assets/Icons/icon-default-profile.png';
import IconAddProfile from '../../../assets/Icons/icon-add-profile.png';

import { Header } from '../../../components/Header';
import { InfoRow } from '../../../components/InfoRow';

const data = {
	name: 'VICTOR EMANUEL SANTOS OLIVEIRA',
	cpf: '067.852.026-92',
	birthday: '07/07/2004',
	email: 'victor@email.com',
	university: 'UniNassau',
	semester: '5º PERÍODO',
	course: 'ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
	matricula: '16021422',
	validity: '21/06/2023',
};

export function Profile({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Header
				navigation={navigation}
				title="Dados"
				optionalButton={{ icon: IconLogout, handler: () => navigation.navigate('Login'), size: 28 }}
			/>
			<View style={styles.containerImageProfile}>
				<View style={styles.boxImageProfile}>
					<Image source={IconDefaultProfile} style={styles.imageProfile} resizeMode="center" />
					<Image source={IconAddProfile} style={styles.addProfile} resizeMode="center" />
				</View>
			</View>

			<View style={styles.containerTable}>
				{Object.entries(data).map((value) => {
					const key = (key) => {
						switch (key) {
							case 'name':
								return 'NOME:';
							case 'cpf':
								return 'CPF:';
							case 'birthday':
								return 'DATA DE NASCIMENTO:';
							case 'email':
								return 'EMAIL';
							case 'university':
								return 'FACULDADE:';
							case 'semester':
								return 'SEMESTRE:';
							case 'course':
								return 'CURSO:';
							case 'matricula':
								return 'MATRÍCULA:';
							case 'validity':
								return 'VALIDADE:';
							default:
								return '';
						}
					};
					return <InfoRow key={value[0]} payload={{ key: key(value[0]), value: value[1] }} />;
				})}
			</View>
		</SafeAreaView>
	);
}

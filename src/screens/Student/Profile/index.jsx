/* eslint-disable indent */
import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import IconLogout from '../../../assets/Icons/icon-logout.png';
import IconDefaultProfile from '../../../assets/Icons/icon-default-profile.png';
import IconAddProfile from '../../../assets/Icons/icon-add-profile.png';

import { Header } from '../../../components/Header';
import { InfoRow } from '../../../components/InfoRow';

import { api } from '../../../services/api';

export function Profile({ navigation }) {
	const [profile, setProfile] = React.useState();

	React.useEffect(() => {
		setProfile(api.getUser().profile);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Header
				navigation={navigation}
				title="Dados"
				optionalButton={{
					icon: IconLogout,
					handler: () => {
						api.clearStorage();
						navigation.navigate('Login');
					},
					size: 28,
				}}
			/>

			<ScrollView style={{ width: '100%' }} contentContainerStyle={styles.containerScrollView}>
				<View style={styles.containerImageProfile}>
					<View style={styles.boxImageProfile}>
						<Image source={IconDefaultProfile} style={styles.imageProfile} resizeMode="center" />
						<Image source={IconAddProfile} style={styles.addProfile} resizeMode="center" />
					</View>
				</View>

				<View style={styles.containerTable}>
					{profile
						? Object.entries(profile).map((value) => {
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
						  })
						: null}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

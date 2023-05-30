import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
import { Header } from '../../../components/Header';

export function Faq({ navigation }) {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} title="F.A.Q" />

			<View style={styles.containerLogo}>
				<View style={styles.boxLogo}>
					<Image
						style={styles.imageLogo}
						source={require('../../../assets/Icons/logo.png')}
						resizeMode="center"
					/>
				</View>
				<Text style={styles.textLogo}>{'Uni\nPass'}</Text>
			</View>
		</View>
	);
}

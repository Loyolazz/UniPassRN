import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import { Header } from '../../../components/Header';
import { FaqAnswer } from '../../../components/FaqAnswer';

import { styles } from './styles';

import { api } from '../../../services/api';
import {} from 'react-native-gesture-handler';

export function Faq({ navigation }) {
	const [faq, setFaq] = React.useState([]);

	React.useEffect(() => {
		setFaq(api.getFaq());
	}, [faq]);

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

			<ScrollView
				style={{ width: '90%', paddingTop: 50 }}
				contentContainerStyle={{ gap: 20, paddingBottom: 150 }}
				showsVerticalScrollIndicator={false}
			>
				{faq.map((item, index) => {
					return <FaqAnswer key={index} question={item.title} response={item.text} />;
				})}
			</ScrollView>
		</View>
	);
}

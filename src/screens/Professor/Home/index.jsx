import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import IconAddCurso from '../../../assets/Icons/icon-add-curso.png';
import IconCarteirinha from '../../../assets/Icons/icon-carteirinha.png';
import IconFaq from '../../../assets/Icons/icon-faq.png';

import { CardNavigator } from '../../../components/CardNavigator';
import { Carousel } from '../../../components/Carousel';

export function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.textHeader}>UniPass</Text>
			</View>

			<Carousel
				style={styles.carousel}
				navigation={navigation}
				data={['https://imgur.com/xOrgY2r.png', 'https://i.imgur.com/JHPyYzv.png']}
			/>

			<View style={styles.containerCards}>
				<CardNavigator navigation={navigation} id="Course" icon={IconAddCurso} text="Cursos" />
				<CardNavigator
					navigation={navigation}
					id="Profile"
					icon={IconCarteirinha}
					text="Carteirinha"
				/>
				<CardNavigator navigation={navigation} id="Faq" icon={IconFaq} text="F.A.Q" />
			</View>
		</View>
	);
}

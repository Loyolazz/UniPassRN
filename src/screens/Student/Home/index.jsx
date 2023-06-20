import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import IconCursos from '../../../assets/Icons/icon-cursos.png';
import IconCarteirinha from '../../../assets/Icons/icon-carteirinha.png';
import IconInscricoes from '../../../assets/Icons/icon-inscricoes.png';
import IconMyTimes from '../../../assets/Icons/icon-my-times.png';
import IconFaq from '../../../assets/Icons/icon-faq.png';

import { CardNavigator } from '../../../components/CardNavigator';
import { Carousel } from '../../../components/Carousel';

import { api } from '../../../services/api';

export function Home({ navigation }) {
	const scrollView = React.useRef();

	// React.useEffect(() => {
	// 	setTimeout(() => {
	// 		scrollView.current.scrollTo({
	// 			x: 0,
	// 			y: 80,
	// 			animated: true,
	// 		});
	// 	}, 500);

	// 	setTimeout(() => {
	// 		scrollView.current.scrollTo({
	// 			x: 0,
	// 			y: 0,
	// 			animated: true,
	// 		});
	// 	}, 1000);
	// });

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.textHeader}>UniPass</Text>
				</View>

				<ScrollView
					style={styles.container}
					contentContainerStyle={{ alignItems: 'center', width: '100%', paddingBottom: 150 }}
					showsVerticalScrollIndicator={false}
					ref={scrollView}
					decelerationRate={0.5}
				>
					<Carousel style={styles.carousel} navigation={navigation} data={api.getBanners()} />

					<View style={styles.containerCards}>
						<CardNavigator
							navigation={navigation}
							id="SelectLocation"
							icon={IconCursos}
							text="Cursos"
						/>
						<CardNavigator
							navigation={navigation}
							id="Profile"
							icon={IconCarteirinha}
							text="Carteirinha"
						/>
						<CardNavigator
							navigation={navigation}
							id="MyCourses"
							icon={IconInscricoes}
							text="Minhas Inscrições"
						/>
						<CardNavigator
							navigation={navigation}
							id="Workload"
							icon={IconMyTimes}
							text="Minhas Horas"
						/>
						<CardNavigator navigation={navigation} id="Faq" icon={IconFaq} text="F.A.Q" />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

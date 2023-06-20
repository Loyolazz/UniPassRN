import React from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import Fonts from '../../../assets/Fonts';

import { Header } from '../../../components/Header';

import { locations } from '../../../services/db.json';

export function SelectLocation({ navigation }) {
	const [selectedState, setSelectedState] = React.useState('');
	const [selectedCity, setSelectedCity] = React.useState('');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Header navigation={navigation} title="Escolha a Região" />

				<View style={styles.containerStatesList}>
					<SelectList
						data={() => {
							let states = [];
							locations.map((value, index) => {
								states.push({ value: value[0], key: index });
							});

							return states;
						}}
						save="value"
						setSelected={(select) => setSelectedState(select)}
						placeholder="Estado"
						searchPlaceholder="procurar"
						search={false}
						notFoundText=""
						boxStyles={{
							backgroundColor: '#F0E6E6',
							borderWidth: 0,
							borderRadius: 5,
						}}
						dropdownStyles={{
							backgroundColor: '#F0E6E6',
							borderWidth: 0,
							borderRadius: 5,
						}}
						dropdownTextStyles={{
							fontFamily: Fonts.regular,
							fontSize: 16,
							color: '#000',
						}}
						inputStyles={{
							fontFamily: Fonts.regular,
							fontSize: 16,
							color: '#000',
						}}
					/>
				</View>

				<View style={styles.containerCitiesList}>
					<SelectList
						data={() => {
							if (!selectedState) return [];

							let cities = [];
							locations.map((value) => {
								if (value[0] === selectedState) {
									value[1].map((value, index) => {
										cities.push({ value: value, key: index });
									});
								}
							});

							return cities;
						}}
						save="value"
						setSelected={(select) => setSelectedCity(select)}
						placeholder="Cidade"
						searchPlaceholder="procurar"
						search={false}
						notFoundText="selecione o estado"
						boxStyles={{
							backgroundColor: '#F0E6E6',
							borderWidth: 0,
							borderRadius: 5,
						}}
						dropdownStyles={{
							backgroundColor: '#F0E6E6',
							borderWidth: 0,
							borderRadius: 5,
						}}
						dropdownTextStyles={{
							fontFamily: Fonts.regular,
							fontSize: 16,
							color: '#000',
						}}
						inputStyles={{
							fontFamily: Fonts.regular,
							fontSize: 16,
							color: '#000',
						}}
					/>
				</View>

				<TouchableOpacity
					style={styles.buttonLogin}
					activeOpacity={0.8}
					onPress={() => {
						if (selectedState && selectedCity) {
							navigation.navigate('Courses');
						} else {
							ToastAndroid.show('Selecione a região!', ToastAndroid.SHORT);
						}
					}}
				>
					<Text style={styles.textButtonLogin}>Confirmar Região</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

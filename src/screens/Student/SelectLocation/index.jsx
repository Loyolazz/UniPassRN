import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import { styles } from './styles';
import { Header } from '../../../components/Header';
import Fonts from '../../../assets/Fonts';

const dataLocations = [
	[
		'Sergipe',
		['Macambira', 'Itaporanga', 'Salgado', 'Canidé', 'Indiaroba', 'Carmopolis', 'Pirambu'],
	],
	[
		'São Paulo',
		['São Paulo', 'São Paulo', 'São Paulo', 'São Paulo', 'São Paulo', 'São Paulo', 'São Paulo'],
	],
	[
		'Rio de Janeiro',
		[
			'Rio de Janeiro',
			'Rio de Janeiro',
			'Rio de Janeiro',
			'Rio de Janeiro',
			'Rio de Janeiro',
			'Rio de Janeiro',
			'Rio de Janeiro',
		],
	],
];

const dataStates = [
	{ value: 'Sergipe', key: 1 },
	{ value: 'Pernambuco', key: 2 },
	{ value: 'Bahia', key: 3 },
	{ value: 'Alagoas', key: 4 },
];

const dataCities = [
	{ value: 'Macambira', key: 1 },
	{ value: 'Itaporanga', key: 2 },
	{ value: 'Salgado', key: 3 },
	{ value: 'Canidé', key: 4 },
	{ value: 'Indiaroba', key: 5 },
	{ value: 'Carmopolis', key: 6 },
	{ value: 'Pirambu', key: 7 },
];

export function SelectLocation({ navigation }) {
	const [selectedState, setSelectedState] = React.useState('');
	const [selectedCity, setSelectedCity] = React.useState('');

	return (
		<View style={styles.container}>
			<Header navigation={navigation} title="Escolha a Região" />

			<View style={styles.containerStatesList}>
				<SelectList
					data={() => {
						let states = [];
						dataLocations.map((value, index) => {
							states.push({ value: value[0], key: index });
						});
						return states;
					}}
					save="value"
					setSelected={(select) => setSelectedState(select)}
					placeholder="Estado"
					searchPlaceholder="procurar"
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
						dataLocations.map((value) => {
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
					}
				}}
			>
				<Text style={styles.textButtonLogin}>Confirmar Região</Text>
			</TouchableOpacity>
		</View>
	);
}

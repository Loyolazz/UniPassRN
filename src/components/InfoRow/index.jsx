import React from 'react';
import { View, Text } from 'react-native';

import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

export function InfoRow({ payload: { key, value } }) {
	return (
		<View style={{ minWidth: '40%' }}>
			<Text style={{ fontFamily: Fonts.regular, fontSize: 15, color: Colors.bluePrimary }}>
				{key}
			</Text>
			<Text style={{ fontFamily: Fonts.regular, fontSize: 15, color: 'black' }}>{value}</Text>
		</View>
	);
}

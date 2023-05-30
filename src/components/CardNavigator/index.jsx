import React from 'react';
import { View, TouchableOpacity, Text, Image, useWindowDimensions } from 'react-native';

import { styles } from './styles';

export function CardNavigator({ navigation, id, icon, text }) {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				{ width: 0.35 * useWindowDimensions().width, height: 0.35 * useWindowDimensions().width },
			]}
			activeOpacity={0.98}
			onPress={() => navigation.navigate(id)}
		>
			<View style={styles.boxIcon}>
				<Image style={styles.imageIcon} source={icon} resizeMode="center" />
			</View>

			<View style={styles.footer}>
				<Text style={styles.textFooter}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

import { StyleSheet, Platform } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	containerScrollView: {
		alignItems: 'center',
		paddingBottom: 100,
	},
	containerImageProfile: {
		paddingVertical: 50,
	},
	boxImageProfile: {
		aspectRatio: 1,
		width: 150,
		borderRadius: 100,
		backgroundColor: '#F0E6E6',
	},
	imageProfile: {
		width: '100%',
		height: '100%',
	},
	addProfile: {
		width: '25%',
		height: '25%',
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	containerTable: {
		width: '90%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 15,
	},
});

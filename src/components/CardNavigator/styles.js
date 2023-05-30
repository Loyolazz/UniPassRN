import { StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		aspectRatio: 1,
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
		elevation: 15,
	},
	boxIcon: {
		aspectRatio: 1,
		width: 35,
		marginTop: '24%',
	},
	imageIcon: {
		width: '100%',
		height: '100%',
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: Colors.bluePrimary,
		width: '100%',
		height: '35%',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textFooter: {
		fontFamily: Fonts.bold,
		fontSize: 15,
		color: 'white',
		width: '85%',
		textAlign: 'center',
	},
});

import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bluePrimary,
		alignItems: 'center',
	},
	containerLogo: {
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 20,
	},
	boxLogo: {
		aspectRatio: 1,
		width: '35%',
	},
	imageLogo: {
		width: '100%',
		height: '100%',
	},
	textLogo: {
		fontFamily: Fonts.bold,
		fontSize: 34,
		marginLeft: -5,
		color: 'white',
		lineHeight: 32,
		letterSpacing: -1,
	},
});

import { StyleSheet } from 'react-native';

import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

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
		paddingTop: 40,
	},
	boxLogo: {
		aspectRatio: 1,
		marginLeft: -20,
	},
	imageLogo: {
		width: '100%',
		height: '100%',
	},
	textLogo: {
		fontFamily: Fonts.bold,
		color: 'white',
		lineHeight: 62,
		letterSpacing: -1,
		width: '50%'
	},
	containerInputs: {
		width: '80%',
	},
	textLabelInput: {
		fontFamily: Fonts.bold,
		fontSize: 18,
		color: 'white',
		marginLeft: 5,
		marginBottom: 2,
	},
	textInput: {
		backgroundColor: 'white',
		borderRadius: 8,
		marginBottom: 10,
		color: 'black',
		textDecorationLine: 'none',
		fontFamily: Fonts.regular,
		fontSize: 18,
		lineHeight: 30,
		paddingHorizontal: 10,
	},
	buttonLogin: {
		backgroundColor: Colors.yellowPrimary,
		paddingVertical: 6,
		paddingHorizontal: 80,
		borderRadius: 8,
		marginVertical: 20,
		marginTop: -20,
	},
	textButtonLogin: {
		fontFamily: Fonts.bold,
		fontSize: 22,
		color: Colors.bluePrimary,
	},
});

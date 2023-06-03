import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	containerStatesList: {
		width: '90%',
		paddingTop: 30,
	},
	containerCitiesList: {
		width: '90%',
		paddingTop: 30,
	},
	buttonLogin: {
		backgroundColor: Colors.yellowPrimary,
		paddingVertical: 6,
		paddingHorizontal: 40,
		borderRadius: 8,
		marginVertical: 50,
		elevation: 8
	},
	textButtonLogin: {
		fontFamily: Fonts.bold,
		fontSize: 22,
		color: Colors.bluePrimary,
	},
});

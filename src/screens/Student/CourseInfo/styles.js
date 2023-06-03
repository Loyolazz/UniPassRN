import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
	},
	textCourseTitle: {
		fontFamily: Fonts.bold,
		fontSize: 20,
		color: Colors.bluePrimary,
		width: '70%',
		textAlign: 'center',
		paddingTop: 20,
	},
	textTitleResume: {
		fontFamily: Fonts.bold,
		fontSize: 18,
		color: Colors.bluePrimary,
		width: '90%',
		marginTop: 15
	},
	textResume: {
		fontFamily: Fonts.regular,
		fontSize: 18,
		color: Colors.bluePrimary,
		width: '90%',
		marginTop: 5,
	},
});

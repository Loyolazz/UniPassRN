import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
	},
	scrollView: {
		flexGrow: 1,
		width: '100%',
		alignItems: 'center',
		paddingBottom: 60,
	},
	buttonCourse: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		backgroundColor: Colors.yellowPrimary,
		paddingVertical: 20,
		paddingHorizontal: 15,
		marginTop: 30,
		borderRadius: 10,
		elevation: 10,
	},
	boxImageButtonLogo: {
		aspectRatio: 1,
		width: 60,
	},
	imageButtonLogo: {
		width: '100%',
		height: '100%',
	},
	textButton: {
		fontFamily: Fonts.bold,
		fontSize: 20,
		color: '#000',
		width: '70%',
		height: '100%',
		textAlignVertical: 'center',
	},
});

import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	containerProgress: {
		backgroundColor: Colors.bluePrimary,
		width: '100%',
		minHeight: '28%',
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		alignItems: 'center',
	},
	boxProgress: {
		borderRadius: 100,
		borderWidth: 1,
		borderColor: 'white',
		padding: 3.5,
	},
	containerCaptions: {
		position: 'absolute',
		bottom: 0,
		paddingVertical: 20,
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	boxCaptions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6
	},
	textCaptions: {
		fontFamily: Fonts.regular,
		fontSize: 15,
		color: 'white',
	},
	containerAddCourse: {
		width: '90%',
		paddingVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textAddCourse: {
		fontFamily: Fonts.bold,
		fontSize: 25,
		color: 'black',
	},
	boxIconAddCourse: {
		aspectRatio: 1,
		width: 40,
	},
	iconAddCourse: {
		width: '100%',
		height: '100%',
	},
	containerCertificates: {
		width: '100%',
		height: '100%',
		backgroundColor: Colors.gray,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
});

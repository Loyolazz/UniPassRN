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
		alignSelf: 'center',
	},
	boxCaptions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
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
		height: '53%',
		backgroundColor: Colors.gray,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 10,
	},
	textCertificates: {
		fontFamily: Fonts.bold,
		fontSize: 25,
		color: 'black',
		paddingLeft: 30,
		paddingVertical: 10,
	},
	containerCertCaptions: {
		bottom: 0,
		paddingVertical: 20,
		width: '95%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		alignSelf: 'center',
	},
	boxCertCaptions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	textCertCaptions: {
		fontFamily: Fonts.bold,
		fontSize: 15,
		color: 'black',
	},
});

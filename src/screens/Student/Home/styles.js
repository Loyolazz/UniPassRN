import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bluePrimary,
	},
	header: {
		width: '100%',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.bluePrimary,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 99,
		elevation: 10
	},
	textHeader: {
		fontFamily: Fonts.bold,
		fontSize: 30,
		color: 'white',
	},
	carousel: {
		marginBottom: '15%',
		paddingTop: 70,
	},
	containerCards: {
		width: '80%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		gap: 25,
	},
});

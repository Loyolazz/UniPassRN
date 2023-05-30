import { StyleSheet } from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bluePrimary,
		alignItems: 'center',
	},
	header: {
		width: '100%',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textHeader: {
		fontFamily: Fonts.bold,
		fontSize: 30,
		color: 'white',
	},
	carousel: {
		marginBottom: '15%'
	},
	containerCards: {
		width: '80%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		gap: 25,
	},
});

import React from 'react';
import { View, Text } from 'react-native';

import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

export function CourseSheetInfo({ initialDate, finalDate, time }) {
	return (
		<View
			style={{
				width: '90%',
				borderWidth: 1,
				borderColor: Colors.yellowPrimary,
				marginVertical: 20,
			}}
		>
			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: Colors.yellowSecondary,
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.extraBold,
						fontSize: 18,
						color: Colors.bluePrimary,
						textAlign: 'center',
					}}
				>
					DATA INÍCIO
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: 'white',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.regular,
						fontSize: 18,
						color: 'gray',
					}}
				>
					{initialDate}
				</Text>
			</View>

			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: Colors.yellowSecondary,
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.extraBold,
						fontSize: 18,
						color: Colors.bluePrimary,
						textAlign: 'center',
					}}
				>
					DATA TÉRMINO
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: 'white',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.regular,
						fontSize: 18,
						color: 'gray',
					}}
				>
					{finalDate}
				</Text>
			</View>

			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: Colors.yellowSecondary,
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.extraBold,
						fontSize: 18,
						color: Colors.bluePrimary,
						textAlign: 'center',
					}}
				>
					HORÁRIO
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					padding: 10,
					backgroundColor: 'white',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontFamily: Fonts.regular,
						fontSize: 18,
						color: 'gray',
					}}
				>
					{time}
				</Text>
			</View>
		</View>
	);
}

import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import Fonts from '../../assets/Fonts';
import Colors from '../../assets/Colors';

import IconBack from '../../assets/Icons/icon-back.png';

export function Header({ navigation, title, titleStyle, optionalButton }) {
	return (
		<View
			style={{
				width: '100%',
				height: 70,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: Colors.bluePrimary,
			}}
		>
			<TouchableOpacity
				style={{
					aspectRatio: 1,
					width: 30,
					position: 'absolute',
					left: 20,
				}}
				activeOpacity={0.8}
				onPress={() => navigation.goBack()}
			>
				<Image
					source={IconBack}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</TouchableOpacity>

			<Text
				style={{
					fontFamily: Fonts.bold,
					fontSize: 25,
					color: 'white',
					...titleStyle,
				}}
			>
				{title}
			</Text>

			{optionalButton ? (
				<TouchableOpacity
					style={{
						aspectRatio: 1,
						width: optionalButton.size ? optionalButton.size : 30,
						position: 'absolute',
						right: 20,
					}}
					activeOpacity={0.8}
					onPress={optionalButton.handler}
				>
					<Image
						source={optionalButton.icon}
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				</TouchableOpacity>
			) : null}
		</View>
	);
}

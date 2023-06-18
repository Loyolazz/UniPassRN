import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import Fonts from '../../assets/Fonts';
import Colors from '../../assets/Colors';

export function FaqAnswer({ question, response }) {
	const [responseVisible, setResponseVisible] = React.useState(false);

	const textTranslateY = useSharedValue(-50);
	const textOpacity = useSharedValue(0);

	const showResponse = () => {
		textTranslateY.value = withTiming(0, { duration: 150 });
		textOpacity.value = withTiming(1, { duration: 300 });
	};

	const hideResponse = () => {
		textTranslateY.value = withTiming(-50, { duration: 150 });
		textOpacity.value = withTiming(0, { duration: 300 });
	};

	return (
		<View style={{ width: '100%', height: 'auto' }}>
			<TouchableOpacity
				onPress={() => {
					setResponseVisible(!responseVisible);
					if (!responseVisible) showResponse();
					if (responseVisible) hideResponse();
				}}
				activeOpacity={0.8}
			>
				<Text style={{ fontFamily: Fonts.regular, fontSize: 20, color: Colors.yellowPrimary }}>
					{question}
				</Text>
			</TouchableOpacity>

			<Animated.Text
				style={[
					{
						fontFamily: Fonts.regular,
						fontSize: 18,
						color: 'white',
						display: responseVisible ? 'flex' : 'none',
					},
					useAnimatedStyle(() => {
						'worklet';
						return {
							transform: [{ translateY: textTranslateY.value }],
							opacity: textOpacity.value,
						};
					}),
				]}
			>
				{response}
			</Animated.Text>
		</View>
	);
}

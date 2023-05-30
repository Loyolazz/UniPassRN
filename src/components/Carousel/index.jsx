import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import CarouselComponet from 'react-native-reanimated-carousel';

export function Carousel({ style, navigation, data }) {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	return (
		<View style={{ width: '100%', ...style }}>
			<CarouselComponet
				loop
				autoPlay={true}
				autoPlayInterval={8000}
				width={useWindowDimensions().width}
				height={useWindowDimensions().width / 2}
				data={data}
				scrollAnimationDuration={1000}
				onSnapToItem={(index) => setCurrentIndex(index)}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image source={{ uri: item }} style={{ width: '100%', height: '100%' }} />
						</View>
					);
				}}
			/>
			<View
				style={{
					width: '100%',
					height: '15%',
					flexDirection: 'row',
					position: 'absolute',
					bottom: 0,
					alignItems: 'center',
					justifyContent: 'center',
					gap: 8,
				}}
			>
				{data.map((item, index) => {
					return (
						<View
							key={index}
							style={{
								aspectRatio: 1,
								width: 12,
								backgroundColor: currentIndex === index ? '#fff' : '#000',
								borderRadius: 100,
								opacity: currentIndex === index ? 0.9 : 0.5,
							}}
						/>
					);
				})}
			</View>
		</View>
	);
}

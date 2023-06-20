import React from 'react';
import {
	View,
	Modal,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	StyleSheet,
} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import IconAddCourse from '../../assets/Icons/icon-add-course.png';

import Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';

export function ModalWorkload({ visible, setVisible }) {
	const [inputCourse, setInputCourse] = React.useState('');
	const [inputTime, setInputTime] = React.useState('');
	// const [inputAttachment, setInputAttachment] = React.useState('');

	const backgroundOpacity = useSharedValue(0);
	const boxTranslateY = useSharedValue(1000);

	const onIn = () => {
		backgroundOpacity.value = withTiming(1, { duration: 1000 });
		boxTranslateY.value = withTiming(0, { duration: 1000 });
	};

	return (
		<Modal
			visible={visible}
			onShow={onIn}
			onRequestClose={() => {
				backgroundOpacity.value = 1;
				boxTranslateY.value = 0;
				setVisible(!visible);
			}}
			animationType="none"
			transparent={true}
			statusBarTranslucent={true}
		>
			<KeyboardAvoidingView behavior="position">
				<Animated.View
					style={[
						{
							backgroundColor: '#00000064',
							width: '100%',
							height: '100%',
							justifyContent: 'flex-end',
						},
						useAnimatedStyle(() => {
							'worklet';
							return {
								opacity: backgroundOpacity.value,
							};
						}),
					]}
				>
					<Animated.View
						style={[
							styles.container,
							useAnimatedStyle(() => {
								'worklet';
								return {
									transform: [{ translateY: boxTranslateY.value }],
								};
							}),
						]}
					>
						<Text style={styles.textTitle}>Adicione seu certificado</Text>

						<View style={styles.containerInputs}>
							<Text style={styles.textLabelInput}>Curso / Atividade</Text>
							<TextInput
								style={styles.textInput}
								inputMode="text"
								cursorColor="#000"
								value={inputCourse}
								onChangeText={(value) => setInputCourse(value)}
							/>

							<Text style={styles.textLabelInput}>Carga Horária</Text>
							<TextInput
								style={styles.textInput}
								inputMode="text"
								cursorColor="#000"
								value={inputTime}
								onChangeText={(value) => setInputTime(value)}
								maxLength={14}
							/>

							<Text style={styles.textLabelInput}>Anexo do Certificado</Text>
							<TouchableOpacity style={styles.inputAttachment} activeOpacity={0.8}>
								<Text style={styles.textAttachmentTitle}>Anexo.pdf</Text>

								<View style={styles.boxIconAddAttachment}>
									<Image
										source={IconAddCourse}
										style={styles.iconAddAttachment}
										resizeMode="center"
									/>
								</View>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							style={styles.buttonSubmit}
							activeOpacity={0.8}
							onPress={() => {
								console.log('Clicou!');
							}}
						>
							<Text style={styles.textButtonSubmit}>Enviar</Text>
						</TouchableOpacity>
					</Animated.View>
				</Animated.View>
			</KeyboardAvoidingView>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.gray,
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		gap: 20,
	},
	textTitle: {
		fontFamily: Fonts.regular,
		fontSize: 24,
		color: 'black',
		width: '80%',
		alignSelf: 'center',
		marginTop: 30,
	},
	containerInputs: {
		width: '80%',
		alignSelf: 'center',
	},
	textLabelInput: {
		fontFamily: Fonts.regular,
		fontSize: 20,
		color: 'black',
		marginLeft: 5,
		marginBottom: 2,
	},
	textInput: {
		backgroundColor: 'white',
		borderRadius: 8,
		marginBottom: 10,
		color: 'black',
		textDecorationLine: 'none',
		fontFamily: Fonts.regular,
		fontSize: 18,
		lineHeight: 30,
		paddingHorizontal: 10,
	},
	inputAttachment: {
		backgroundColor: 'white',
		borderRadius: 8,
		marginBottom: 10,
		paddingHorizontal: 6,
		paddingVertical: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textAttachmentTitle: {
		fontFamily: Fonts.bold,
		fontSize: 18,
		marginLeft: 5,
		color: 'black',
	},
	boxIconAddAttachment: {
		aspectRatio: 1,
		width: 40,
	},
	iconAddAttachment: {
		width: '100%',
		height: '100%',
	},
	buttonSubmit: {
		backgroundColor: Colors.yellowPrimary,
		paddingVertical: 6,
		borderRadius: 8,
		marginVertical: 10,
		width: '60%',
		alignSelf: 'center',
		alignItems: 'center',
	},
	textButtonSubmit: {
		fontFamily: Fonts.bold,
		fontSize: 22,
		color: Colors.bluePrimary,
	},
});

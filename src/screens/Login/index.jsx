import React from 'react';
import {
	View,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
	ScrollView,
	useWindowDimensions,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { styles } from './styles';

export function Login({ navigation }) {
	const [inputMatricula, setInputMatricula] = React.useState('');
	const [inputCpf, setInputCpf] = React.useState('');
	const [inputSenha, setInputSenha] = React.useState('');
	const [keyboardStatus, setKeyboardStatus] = React.useState('hide');

	const maskCpf = (value) => {
		if (value.length > 3) {
			value = value.replace(/[^\d]/g, '');
			value = value.replace(/(\d{3})/, '$1.');
		}
		if (value.length > 7) {
			value = value.replace(/[^\d]/g, '');
			value = value.replace(/(\d{3})(\d{3})/, '$1.$2.');
		}
		if (value.length > 11) {
			value = value.replace(/[^\d]/g, '');
			value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-');
		}
		return value;
	};

	// Animations

	const { width } = useWindowDimensions();

	const logoSize = useSharedValue(0.45 * width);
	const containerLogoOffset = useSharedValue(0);
	const titleSize = useSharedValue(64);
	const titleMargin = useSharedValue(-20);
	const paddingInputs = useSharedValue(60);

	const keyboardOpenAnimation = () => {
		titleSize.value = withTiming(30, { duration: 300 });
		titleMargin.value = withTiming(0, { duration: 300 });
		logoSize.value = withTiming(0.2 * width, { duration: 300 });
		containerLogoOffset.value = withTiming(-(0.1 * width), { duration: 300 });
		paddingInputs.value = withTiming(35, { duration: 500 });
	};

	const keyboardCloseAnimation = () => {
		logoSize.value = withTiming(0.45 * width, { duration: 450 });
		containerLogoOffset.value = withTiming(0, { duration: 450 });
		titleSize.value = withTiming(64, { duration: 450 });
		titleMargin.value = withTiming(-20, { duration: 450 });
		paddingInputs.value = withTiming(60, { duration: 450 });
	};

	React.useEffect(() => {
		const keyboardOpen = Keyboard.addListener('keyboardDidShow', () => {
			keyboardOpenAnimation();
			setKeyboardStatus('show');
		});

		const keyboardClose = Keyboard.addListener('keyboardDidHide', () => {
			keyboardCloseAnimation();
			setKeyboardStatus('hide');
		});

		return () => {
			keyboardOpen.remove();
			keyboardClose.remove();
		};
	}, []);

	return (
		// <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
		<ScrollView contentContainerStyle={{ flex: 1 }}>
			<View style={styles.container}>
				<Animated.View
					style={[
						styles.containerLogo,
						useAnimatedStyle(() => {
							'wokrlet';
							return {
								transform: [
									{
										translateX: containerLogoOffset.value,
									},
								],
							};
						}),
					]}
				>
					<Animated.View
						style={[
							styles.boxLogo,
							useAnimatedStyle(() => {
								'worklet';
								return {
									width: logoSize.value,
								};
							}),
						]}
					>
						<Image
							style={styles.imageLogo}
							source={require('../../assets/Icons/logo.png')}
							resizeMode="center"
						/>
					</Animated.View>
					<Animated.Text
						style={[
							styles.textLogo,
							useAnimatedStyle(() => {
								'worklet';
								return {
									fontSize: titleSize.value,
									marginLeft: titleMargin.value,
								};
							}),
						]}
						numberOfLines={keyboardStatus === 'show' ? 1 : null}
					>
						{keyboardStatus === 'show' ? 'UniPass' : 'Uni\nPass'}
					</Animated.Text>
				</Animated.View>

				<Animated.View
					style={[
						styles.containerInputs,
						useAnimatedStyle(() => {
							'worklet';
							return {
								paddingVertical: paddingInputs.value,
							};
						}),
					]}
				>
					<Text style={styles.textLabelInput}>Matrícula:</Text>
					<TextInput
						style={styles.textInput}
						inputMode="numeric"
						cursorColor="#000"
						value={inputMatricula}
						onChangeText={(value) => setInputMatricula(value)}
					/>

					<Text style={styles.textLabelInput}>CPF:</Text>
					<TextInput
						style={styles.textInput}
						inputMode="numeric"
						cursorColor="#000"
						value={inputCpf}
						onChangeText={(value) => setInputCpf(maskCpf(value))}
						maxLength={14}
					/>

					<Text style={styles.textLabelInput}>Senha:</Text>
					<TextInput
						style={styles.textInput}
						secureTextEntry={true}
						cursorColor="#000"
						value={inputSenha}
						onChangeText={(value) => setInputSenha(value)}
					/>
				</Animated.View>

				<TouchableOpacity
					style={styles.buttonLogin}
					activeOpacity={0.8}
					onPress={() => {
						if (inputCpf === '067.852.025-90') {
							navigation.navigate('Professor');
						} else {
							navigation.navigate('Student');
						}
					}}
				>
					<Text style={styles.textButtonLogin}>Login</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
		// </KeyboardAvoidingView>
	);
}

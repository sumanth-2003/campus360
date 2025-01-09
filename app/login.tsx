import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={require("./assets/favicon.png")}
			/>
			<View style={styles.image}>
				<Text style={styles.title}>Campus360</Text>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.TextInput}
					placeholder="Enter Your Email"
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}
				/>
			</View>
			<View style={styles.inputView}>
				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.TextInput}
					placeholder="Enter Password"
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		marginBottom: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#4f90ff",
		marginBottom: 20,
	},
	inputView: {
		backgroundColor: "#6fc1ff",
		borderRadius: 10,
		width: "80%",
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginBottom: 20,
	},
	label: {
		fontSize: 16,
		color: "#003f5c",
		fontWeight: "bold",
		marginBottom: 5,
	},
	TextInput: {
		height: 40,
		backgroundColor: "#fff",
		borderRadius: 5,
		paddingHorizontal: 10,
	},
	forgot_button: {
		height: 30,
		marginBottom: 30,
		color: "#003f5c",
	},
	loginBtn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#06528c",
	},
	loginText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});
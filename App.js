import { StatusBar } from "expo-status-bar";
import {
	Button,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Testing emulator 1</Text>
			<TouchableOpacity>
				<Text>Hola</Text>
			</TouchableOpacity>
			<Button
				onPress={() => alert("HOLA 1")}
				title="Learn More"
				style={styles.button}
				accessibilityLabel="Learn more about this purple button"
			/>
			<Pressable style={styles.button} onPress={() => alert("HOLA 2")}>
				<Text style={styles.text}>Button Pressable</Text>
			</Pressable>
			<Image
				source={{ uri: "https://picsum.photos/200/300" }}
				style={styles.stylesImg}
			/>
			<StatusBar style="auto" />
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
	stylesImg: {
		width: 250,
		height: 250,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: "black",
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
	},
});

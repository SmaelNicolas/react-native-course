import { Button, StyleSheet, TextInput, View } from "react-native";

export const Clase3 = () => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Add a new task"
					autoComplete="off"
					autoCorrect={false}
					autoCapitalize="none"
				/>
				<Button title="ADD" color={"#626893"} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	inputContainer: {
		marginTop: 50,
		marginHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	input: {
		width: "75%",
		borderBottomColor: "#626893",
		borderBottomWidth: 1,
		height: 40,
		color: "#212121",
	},
});

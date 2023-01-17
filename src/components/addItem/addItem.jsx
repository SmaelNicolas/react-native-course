import { Button, TextInput, View } from "react-native";
import { styles } from "../../../styles";

export const AddItem = ({
	placeholder,
	task,
	onHandlerChange,
	onHandlerSubmit,
	buttonText,
}) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				autoComplete="off"
				autoCorrect={false}
				autoCapitalize="none"
				value={task}
				onChangeText={(e) => onHandlerChange(e)}
			/>
			<Button
				disabled={!task}
				onPress={onHandlerSubmit}
				title={buttonText}
				color="#545956"
			/>
		</View>
	);
};

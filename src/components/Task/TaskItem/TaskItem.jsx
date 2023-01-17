import { TouchableOpacity } from "react-native";
import { styles } from "../../../../Clase-5/styles";

export const TaskItem = ({ item }) => {
	return (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => onHandleModal(item)}>
			<Text style={styles.itemList}>{item.value}</Text>
		</TouchableOpacity>
	);
};

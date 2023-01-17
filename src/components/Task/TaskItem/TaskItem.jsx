import { Text, TouchableOpacity } from "react-native";
import { styles } from "../../../../styles";

export const TaskItem = ({ item, onHandleModal }) => {
	return (
		<TouchableOpacity
			style={
				item.complete
					? styles.itemContainerComplete
					: styles.itemContainer
			}
			onPress={() => onHandleModal(item)}>
			<Text style={styles.itemList}>asda</Text>
		</TouchableOpacity>
	);
};

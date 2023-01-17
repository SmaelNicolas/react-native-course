import { Button, Modal, Text, View } from "react-native";
import { styles } from "../../../Clase-5/styles";

export const CustomModal = ({
	isModalVisible,
	setIsModalVisible,
	onHandleDelete,
}) => {
	return (
		<Modal visible={isModalVisible} animationType="slide">
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>Title Detail</Text>
				<View style={styles.modalDetailContainer}>
					<Text style={styles.modalDetailMesage}>Detail</Text>
					<Text style={styles.modalTitle}>Totñe</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					<Button
						title="Cancel"
						color="grey"
						onPress={() => setIsModalVisible(!isModalVisible)}
					/>
					<Button
						title="Delete"
						color="red"
						onPress={onHandleDelete}
					/>
				</View>
			</View>
		</Modal>
	);
};

import { Button, Modal, Text, View } from "react-native";
import { styles } from "../../../styles";

export const CustomModal = ({
	isModalVisible,
	setIsModalVisible,
	onHandleDelete,
	onHandleStatus,
	selectedTask,
}) => {
	return (
		<Modal visible={isModalVisible} animationType="slide">
			<Button
				title="Close Modal"
				color="grey"
				onPress={() => setIsModalVisible(!isModalVisible)}></Button>
			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>Title Detail</Text>
				<View style={styles.modalDetailContainer}>
					<Text style={styles.modalDetailMesage}>Detail</Text>
					<Text style={styles.modalTitle}>Totñe</Text>
				</View>
				<View style={styles.modalButtonContainer}>
					{selectedTask.complete ? (
						<Button
							title="Put In Progress"
							color="#ADD8E6"
							onPress={() => {
								onHandleStatus(selectedTask);
								setIsModalVisible(!isModalVisible);
							}}
						/>
					) : (
						<Button
							title="Complete Task"
							color="green"
							onPress={() => {
								onHandleStatus(selectedTask);
								setIsModalVisible(!isModalVisible);
							}}
						/>
					)}
					<Button
						title="Delete Task"
						color="red"
						onPress={onHandleDelete}
					/>
				</View>
			</View>
		</Modal>
	);
};

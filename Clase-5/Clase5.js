import { useState } from "react";
import {
	Button,
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export const Clase5 = () => {
	const [task, setTask] = useState();
	const [tasks, setTasks] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState();

	const onHandlerChange = (text) => {
		setTask(text);
	};

	const onHandlerSubmit = () => {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(),
				value: task,
			},
		]);
		setTask("");
	};

	const onHandleModal = (item) => {
		setSelectedTask(item);
		setIsModalVisible(!isModalVisible);
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() => onHandleModal(item)}>
			<Text style={styles.itemList}>{item.value}</Text>
		</TouchableOpacity>
	);

	const keyExtractor = (item) => item.id;

	const onHandleDelete = () => {
		setTasks((prevTaskList) =>
			prevTaskList.filter((task) => task.id !== selectedTask.id)
		);
		setIsModalVisible(!isModalVisible);
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Add a new task"
					autoComplete="off"
					autoCorrect={false}
					autoCapitalize="none"
					value={task}
					onChangeText={onHandlerChange}
				/>
				<Button
					disabled={!task}
					onPress={onHandlerSubmit}
					title="ADD"
					color={"#626893"}
				/>
			</View>
			{/* <View style={styles.listContainer}>
				{tasks.map((item) => (
					<View key={item.id} style={styles.itemContainer}>
						<Text style={styles.itemList}>{item.value}</Text>
					</View>
				))}
			</View> */}
			<FlatList
				data={tasks}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				style={styles.listContainer}
			/>
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
	listContainer: {
		marginHorizontal: 20,
		marginTop: 40,
	},
	itemContainer: {
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		backgroundColor: "#626893",
		marginBottom: 10,
		borderRadius: 10,
	},
	itemList: {
		fontSize: 14,
		color: "#ffffff",
		fontWeight: "bold",
	},
	modalContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 50,
		paddingVertical: 20,
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	modalDetailContainer: {
		paddingVertical: 20,
	},
	modalDetailMesage: {
		fontSize: 14,
		color: "#212121",
	},
	selectedTask: {
		fontSize: 14,
		color: "#212121",
		paddingVertical: 16,
		textAlign: "center",
	},
	modalButtonContainer: {
		width: "70%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginHorizontal: 20,
	},
});

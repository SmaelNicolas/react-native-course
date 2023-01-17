import { useState } from "react";
import { View } from "react-native";

import { AddItem, CustomModal, TaskList } from "/components";

import { styles } from "./styles";

export const App = () => {
	const [task, setTask] = useState();
	const [tasks, setTasks] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState();

	const onHandlerChange = (text) => {
		console.log("file: Clase5.js:20 ~ onHandlerChange ~ text", text);
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

	const onHandleDelete = () => {
		setTasks((prevTaskList) =>
			prevTaskList.filter((task) => task.id !== selectedTask.id)
		);
		setIsModalVisible(!isModalVisible);
	};

	return (
		<View style={styles.container}>
			<AddItem
				placeholder={"Add a new task"}
				task={task}
				onHandlerChange={onHandlerChange}
				onHandlerSubmit={onHandlerSubmit}
				buttonText={"ADD"}
			/>
			<TaskList
				tasks={tasks}
				onHandleModal={onHandleModal}
				renderItem={TaskItem}
				keyExtractor={keyExtractor}
				style={styles.listContainer}
			/>
			<CustomModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				onHandleDelete={onHandleDelete}
			/>
		</View>
	);
};

import { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles";

import { AddItem, CustomModal, TaskList } from "./components";

export const App = () => {
	const [task, setTask] = useState();
	const [tasks, setTasks] = useState([]);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedTask, setSelectedTask] = useState({});

	const onHandlerChange = (text) => {
		setTask(text);
	};

	const onHandlerSubmit = () => {
		setTasks([
			...tasks,
			{
				id: Math.random().toString(),
				value: task,
				complete: false,
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

	const onHandleStatus = (task) => {
		task.complete = !task.complete;
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
				style={styles.listContainer}
			/>
			<CustomModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				onHandleDelete={onHandleDelete}
				onHandleStatus={onHandleStatus}
				selectedTask={selectedTask}
			/>
		</View>
	);
};

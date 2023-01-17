import React from "react";
import { FlatList } from "react-native";
import { styles } from "../../../../styles";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({ tasks, onHandleModal }) => {
	const renderItem = ({ item }) => (
		<TaskItem item={item} onHandleModal={onHandleModal} />
	);

	const keyExtractor = (item) => item.id;

	return (
		<FlatList
			data={tasks}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			style={styles.listContainer}
		/>
	);
};

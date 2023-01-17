import React from "react";
import { styles } from "../../../../Clase-5/styles";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({ tasks, onHandleModal }) => {
	const keyExtractor = (item) => item.id;

	return (
		<FlatList
			data={tasks}
			renderItem={TaskItem(item, onHandleModal)}
			keyExtractor={keyExtractor}
			style={styles.listContainer}
		/>
	);
};

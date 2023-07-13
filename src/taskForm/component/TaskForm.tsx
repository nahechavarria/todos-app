import styles from './TaskForm.module.css';

const TaskForm = () => {
	return (
		<div className={styles.container}>
			<input
				className={styles.inputTask}
				type="text"
				name="task"
				id="task"
				placeholder="New task"
			/>
			<div className={styles.buttonTask}>Add task</div>
		</div>
	);
};

export { TaskForm };

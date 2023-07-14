import { useState } from 'react';

import { Task } from '../../context/todos';
import styles from './TaskForm.module.css';

const TaskForm = ({ onSubmit }: Props) => {
	const newId = (Math.random() * 1000000000).toString();
	const emptyTask = { id: newId, description: '', completed: false };
	const [taskData, setTaskData] = useState<Task>(emptyTask);

	const handleChange = (value: string) => {
		setTaskData({ id: newId, description: value, completed: false });
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(taskData);
				setTaskData(emptyTask);
			}}
		>
			<div className={styles.container}>
				<input
					className={styles.inputTask}
					type="text"
					name="task"
					id="task"
					value={taskData?.description}
					placeholder="New task"
					required
					onChange={(e) => handleChange(e.target.value)}
					maxLength={50}
				/>
				<button className={styles.buttonTask} type="submit">
					Add task
				</button>
			</div>
		</form>
	);
};

type Props = {
	onSubmit(task?: Task): void;
};

export { TaskForm };

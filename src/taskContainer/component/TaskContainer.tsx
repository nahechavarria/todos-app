import { TaskForm } from '../../taskForm';
import { TaskList } from '../../taskList';
import { useCreateTask } from '../hook/useCreateTask';
import { useTask } from '../hook/useTask';
import { useDeleteTask } from '../hook/useDeleteTask';
import { useUpdateTask } from '../hook/useUpdateTask';

import styles from './TaskContainer.module.css';
import { Task } from '../../context/todos';

const TaskContainer = () => {
	const { tasks, refreshTaskList } = useTask();
	const { createTask } = useCreateTask(refreshTaskList);
	const { deleteTask } = useDeleteTask(refreshTaskList);
	const { updateTask } = useUpdateTask(refreshTaskList);

	const handleDelete = (task: Task) => {
		deleteTask(task);
	};

	const handleComplete = (task: Task) => {
		updateTask({ ...task, completed: true });
	};

	const handleSubmit = (task: Task) => {
		createTask(task);
	};

	return (
		<div className={styles.container}>
			<TaskForm onSubmit={handleSubmit} />
			<TaskList
				tasks={tasks}
				onComplete={handleComplete}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export { TaskContainer };

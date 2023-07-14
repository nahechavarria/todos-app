import { useState } from 'react';
import { TaskForm } from '../../taskForm';
import { TaskList } from '../../taskList';
import { useCreateTask } from '../hook/useCreateTask';
import { useTask } from '../hook/useTask';
import { useDeleteTask } from '../hook/useDeleteTask';
import { useUpdateTask } from '../hook/useUpdateTask';

import { Task } from '../../context/todos';
import { Pagination } from '../../shared/component/Pagination';
import styles from './TaskContainer.module.css';

const TaskContainer = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const { tasks, refreshTaskList } = useTask();
	const { createTask } = useCreateTask(refreshTaskList);
	const { deleteTask } = useDeleteTask(refreshTaskList);
	const { updateTask } = useUpdateTask(refreshTaskList);

	const result: Task[] = [];
	const totalPages = Math.ceil(tasks.length / 8);

	const handlePaginationView = () => {
		const totalRows = 8;
		const end = currentPage * totalRows;
		const start = end - totalRows;

		if (tasks.length) {
			for (let i = start; i < end; i++) {
				if (tasks[i] !== undefined) result.push(tasks[i]);
			}
		}
	};

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		handlePaginationView();
	};

	handlePaginationView();

	const handleDelete = (task: Task) => {
		deleteTask(task);
	};

	const handleComplete = (task: Task) => {
		const value = !task.completed;
		updateTask({ ...task, completed: value });
	};

	const handleSubmit = (task: Task) => {
		createTask(task);
	};

	return (
		<div className={styles.container}>
			<TaskForm onSubmit={handleSubmit} />
			<TaskList
				tasks={result}
				onComplete={handleComplete}
				onDelete={handleDelete}
			/>
			<br />
			<Pagination
				currentPage={currentPage}
				totalPages={+totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export { TaskContainer };

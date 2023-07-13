import { Task } from '../../context/todos';
import { updateStorage, readStorage } from '../../api/client';

export const useUpdateTask = (refreshTaskList: () => void) => {
	const updateTask = (task: Task) => {
		const tasks = readStorage();
		const taskIndex = tasks.findIndex((t) => t.id === task.id);
		updateStorage([
			...tasks.slice(0, taskIndex),
			task,
			...tasks.slice(taskIndex + 1),
		]);
		refreshTaskList();
	};

	return { updateTask };
};

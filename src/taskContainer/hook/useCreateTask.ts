import { Task } from '../../context/todos';
import { updateStorage, readStorage } from '../../api/client';

export const useCreateTask = (refreshTaskList: () => void) => {
	const createTask = (task: Task) => {
		const tasks = readStorage();
		updateStorage([...tasks, task]);
		refreshTaskList();
	};

	return { createTask };
};

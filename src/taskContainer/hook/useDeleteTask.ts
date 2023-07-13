import { Task } from '../../context/todos';
import { updateStorage, readStorage } from '../../api/client';

export const useDeleteTask = (refreshTaskList: () => void) => {
	const deleteTask = (task: Task) => {
		const tasks = readStorage();
		updateStorage(tasks.filter((t) => t.id !== task.id));
		refreshTaskList();
	};

	return { deleteTask };
};

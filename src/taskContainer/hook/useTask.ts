import { useState, useEffect } from 'react';

import { Task } from '../../context/todos';
import { readStorage } from '../../api/client';

export const useTask = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const getTasks = () => {
		const result: Task[] = readStorage();
		setTasks(result);
	};

	useEffect(() => {
		getTasks();
	}, []);

	return { tasks, refreshTaskList: getTasks };
};

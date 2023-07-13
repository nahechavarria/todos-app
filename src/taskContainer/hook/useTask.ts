import { useState, useEffect } from 'react';

import { Task } from '../../context/todos';
import { readStorage } from '../../api/client';

export const useTask = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const getTasks = () => {
		const result = readStorage();
		setTasks(result);
	};

	useEffect(() => {
		getTasks();
	}, []);

	return { tasks, getTasks };
};

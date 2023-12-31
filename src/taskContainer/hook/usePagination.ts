import { useState } from 'react';
import { Task } from '../../context/todos';

export const usePagination = (tasks: Task[]) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedTasks, setPaginatedTasks] = useState<Task[]>([]);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		PaginatedList();
	};

	const PaginatedList = () => {
		const result: Task[] = [];
		const totalRows = 8;
		const end = currentPage * totalRows;
		const start = end - totalRows;

		if (tasks.length) {
			for (let i = start; i < end; i++) {
				if (tasks[i] !== undefined) result.push(tasks[i]);
			}
		}

		setPaginatedTasks(result);
	};

	return { PaginatedList, handlePageChange, currentPage, paginatedTasks };
};

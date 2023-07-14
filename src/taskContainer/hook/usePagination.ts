import { useState } from 'react';
import { Task } from '../../context/todos';

export const usePagination = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [paginatedTasks, setPaginatedTasks] = useState<Task[]>([]);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const PaginatedList = (tasks: Task[]) => {
		const result: Task[] = [];
		const totalRows = 8;
		const end = currentPage * totalRows;
		const start = end - totalRows;

		for (let i = start; i < end; i++) {
			result.push(tasks[i]);
		}

		setPaginatedTasks(result);
	};

	return { PaginatedList, handlePageChange, currentPage, paginatedTasks };
};

import { Task } from '../context/todos';

const apiUrl = 'https://type.fit/api/quotes';

/**
 * Handles all calls to api
 * @param endpoint
 * @param options
 * @returns api response or error
 */
const client = async (
	endpoint: string,
	{ method, body, signal }: RequestInit
) => {
	const options = {
		method,
		headers: {
			'content-type': 'Application/json',
		},
		body,
		signal,
	};

	const response = await fetch(`${apiUrl}/${endpoint}`, options);
	const data = await response.json();

	if (response.ok) {
		return data;
	}

	switch (response.status) {
		case 401:
			throw new Error('Unauthorized');
		case 403:
			throw new Error('Forbidden');
		case 404:
			throw new Error('Not found');
		default:
			throw new Error('Internal server error');
	}
};

/**
 * Calls client with GET requests of specific resources
 * @param endpoint
 * @param signal
 * @returns resource array
 */
const read = async <T>(endpoint: string, signal?: AbortSignal) => {
	const data = await client(endpoint, {
		method: 'GET',
		signal,
	});

	return data as T[];
};

/**
 * Get all localStorage data
 * @returns localStorage array
 */
const readStorage = (): Task[] => {
	const result = localStorage.getItem('tasks');
	return result ? JSON.parse(result) : [];
};

/**
 * Create a task in localstorage
 * @param task
 * @returns task array
 */
const create = (data: Task): void => {
	localStorage.setItem('tasks', JSON.stringify(data));
};

/**
 * Delete a task on the localstorage
 * @param import
 * @return task array
 */
const remove = (id: string) => {
	localStorage.removeItem(id);
};

export { read, readStorage, create, remove };

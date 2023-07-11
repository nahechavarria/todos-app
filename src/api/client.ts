import { Task } from '../context/todos';

const apiUrl = process.env.VITE_REACT_APP_API_URL!;

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
const read = async <T extends Task>(endpoint: string, signal?: AbortSignal) => {
	const data = await client(endpoint, {
		method: 'GET',
		signal,
	});

	return data as T[];
};

/**
 * Calls client with POST requests of specific resource
 * @param endpoint
 * @param resource
 * @param signal
 * @returns resource
 */
const create = async <T extends Task>(
	endpoint: string,
	task: Task,
	signal?: AbortSignal
) => {
	const data = await client(endpoint, {
		method: 'POST',
		body: JSON.stringify(task),
		signal,
	});

	return data as T;
};

/**
 * Calls client with PUT requests of specific resource
 * @param endpoint
 * @param resource
 * @param signal
 * @returns resource
 */
const update = async <T extends Task>(
	endpoint: string,
	task: Task,
	signal?: AbortSignal
) => {
	const data = await client(`${endpoint}/${task.id}`, {
		method: 'PUT',
		body: JSON.stringify(task),
		signal,
	});

	return data as T;
};

export { read, create, update };

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
 * Calls client with GET requests of specific resources or return all data of localStorage
 * @param local
 * @param endpoint
 * @param signal
 * @returns resource array
 */
const read = async <T>(
	local = true,
	endpoint: string,
	signal?: AbortSignal
) => {
	if (local) {
		return;
	}

	const data = await client(endpoint, {
		method: 'GET',
		signal,
	});

	return data as T[];
};

/**
 * Create a task in localstorage
 * @param task
 * @returns task array
 */
const create = (data: Task) => {
	localStorage.setItem(data.id, data.description);
};

/**
 * Delete a task on the localstorage
 * @param import
 * @return task array
 */
const remove = (id: string) => {
	localStorage.removeItem(id);
};

export { read, create, remove };

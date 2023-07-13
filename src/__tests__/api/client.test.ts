import { read } from '../../api/client';

describe('client', () => {
	test('should return array', async () => {
		const result = await read('/');
		expect(result.constructor.name === 'Array').toBeTruthy();
	});
});

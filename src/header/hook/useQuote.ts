import { useState, useEffect } from 'react';
import { read } from '../../api/client';

export const useQuote = () => {
	const [quotes, setQuotes] = useState([]);
	const [error, setError] = useState<any | null>(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		try {
			setLoading(true);
			setQuotes(await read('/'));
			setError(null);
			setLoading(false);
		} catch (err) {
			setError(err);
			setLoading(false);
		}
	};

	const refetch = async () => {
		await getData();
	};

	useEffect(() => {
		getData();
	}, []);

	return { quotes, error, loading, refetch };
};

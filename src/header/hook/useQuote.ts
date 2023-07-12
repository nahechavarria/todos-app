import { useState, useEffect } from 'react';
import { read } from '../../api/client';
import { Quote } from '../../context/quotes';

export const useQuote = () => {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(false);

	const getData = async () => {
		try {
			setLoading(true);
			const result = await read<Quote>(false, '/');
			setQuotes(result ?? []);
			setError(null);
			setLoading(false);
		} catch (err) {
			setError(err as Error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getData().catch((err) => err);
	}, []);

	const getQuote = () => {
		const total = quotes.length - 1;
		const randomQuote = Math.floor(Math.random() * total);
		return quotes[randomQuote];
	};

	return { getQuote, error, loading };
};

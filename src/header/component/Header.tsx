import { useQuote } from '../hook/useQuote';
import { LoadingView, ErrorView } from '../../shared';

import styles from './Header.module.css';

const Header = () => {
	const { getQuote, error, loading } = useQuote();

	const quote = getQuote();
	if (error) return <ErrorView error={error} />;
	return (
		<div className={styles.container}>
			{!quote || loading ? (
				<LoadingView />
			) : (
				<div className={styles.quoteContainer}>
					<div className={styles.text}>{quote.text}</div>
					<div className={styles.author}>{quote.author ?? 'Unknown'}</div>
				</div>
			)}
		</div>
	);
};

export { Header };

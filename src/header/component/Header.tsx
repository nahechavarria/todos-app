import { useQuote } from '../hook/useQuote';
import { LoadingView, ErrorView } from '../../shared';

import styles from './Header.module.css';

const Header = () => {
	const { getQuote, error, loading } = useQuote();

	const quote = getQuote();

	return (
		<div className={styles.container}>
			{error ? (
				<ErrorView error={error} />
			) : !quote || loading ? (
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

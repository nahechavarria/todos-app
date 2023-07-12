import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

import styles from './ErrorView.module.css';

const ErrorView = ({ error }: Props) => {
	return (
		<div className={styles.errorCenter}>
			<div className={styles.errorContainer}>
				<p className={styles.textSecondary}>Errors occurred</p>
				<h1 className={styles.m5}>
					{error.message ?? 'Internal server error'}
				</h1>
				<a href="/" className={styles.primaryButton}>
					<span>
						Go to Home
						<FontAwesomeIcon icon={faExternalLink} className={styles.ml3} />
					</span>
				</a>
			</div>
		</div>
	);
};

type Props = { error: Error };

export { ErrorView };

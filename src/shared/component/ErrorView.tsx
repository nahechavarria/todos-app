import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

import styles from './ErrorView.module.css';

const ErrorView = ({ error }: Props) => {
	return (
		<div className={styles.errorCenter}>
			<div className={styles.errorContainer}>
				<p className="text-secondary">Errors occurred</p>
				<h1 className="m-5">{error.message ?? 'Internal server error'}</h1>
				<a href="/" className="p-button p-button-sm button-primary">
					<span>
						Go to Home
						<FontAwesomeIcon icon={faExternalLink} className="ml-3" />
					</span>
				</a>
			</div>
		</div>
	);
};

type Props = { error: Error };

export { ErrorView };

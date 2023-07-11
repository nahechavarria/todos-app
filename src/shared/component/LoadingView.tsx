import { ProgressSpinner } from 'primereact/progressspinner';

import styles from './LoadingView.module.css';

const LoadingView = () => (
	<div className={styles.loadingCenter}>
		<ProgressSpinner animationDuration="1s" />
	</div>
);

export { LoadingView };

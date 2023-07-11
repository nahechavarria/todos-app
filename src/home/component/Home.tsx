import { Header } from '../../header';
import { InputField } from '../../shared/component/InputField';
import { Button } from '../../shared/component/Button';

import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.listHeader}>
				<InputField />
				<Button />
			</div>
		</div>
	);
};

export { Home };

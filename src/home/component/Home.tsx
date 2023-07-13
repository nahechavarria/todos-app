import { Header } from '../../header';

import styles from './Home.module.css';
import { TaskContainer } from '../../taskContainer/component/TaskContainer';

const Home = () => {
	return (
		<div className={styles.container}>
			<Header />
			<TaskContainer />
		</div>
	);
};

export { Home };

import { TaskForm } from '../../taskForm';
import { TaskList } from '../../taskList';

import styles from './TaskContainer.module.css';

const TaskContainer = () => {
	return (
		<div className={styles.container}>
			<TaskForm />
			<TaskList />
		</div>
	);
};

export { TaskContainer };

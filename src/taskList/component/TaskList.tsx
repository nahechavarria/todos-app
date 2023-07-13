import { TaskListItem } from '../../taskListItem';

import styles from './TaskList.module.css';

const TaskList = () => {
	return (
		<div className={styles.container}>
			<TaskListItem />
		</div>
	);
};

export { TaskList };

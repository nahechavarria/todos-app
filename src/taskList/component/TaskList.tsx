import { Task } from '../../context/todos';
import { TaskListItem } from '../../taskListItem';

import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDelete, onComplete }: Props) => {
	return (
		<div className={styles.container}>
			{tasks.map((task) => (
				<TaskListItem
					key={task.id}
					task={task}
					onDelete={onDelete}
					onComplete={onComplete}
				/>
			))}
		</div>
	);
};

type Props = {
	tasks: Task[];
	onDelete(task: Task): void;
	onComplete(task: Task): void;
};

export { TaskList };

import { Task } from '../../context/todos';
import styles from './TaskListItem.module.css';

const TaskListItem = ({ task, onComplete, onDelete }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.completed}>
				<input
					type="checkbox"
					name={task.id}
					onChange={() => onComplete(task)}
					checked={task.completed}
				/>
			</div>
			<div className={styles.description}>{task.description}</div>
			<div className={styles.delete}>
				<input type="checkbox" onChange={() => onDelete(task)} name={task.id} />
			</div>
		</div>
	);
};

type Props = {
	task: Task;
	onComplete(task: Task): void;
	onDelete(task: Task): void;
};

export { TaskListItem };

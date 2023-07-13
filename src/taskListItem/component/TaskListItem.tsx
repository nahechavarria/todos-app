import { Task } from '../../context/todos';
import styles from './TaskListItem.module.css';

const TaskListItem = ({ task, onComplete, onDelete }: Props) => {
	return <div className={styles.container}>{task.description}</div>;
};

type Props = {
	task: Task;
	onComplete(task: Task): void;
	onDelete(task: Task): void;
};

export { TaskListItem };

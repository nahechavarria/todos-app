import { CheckBox } from '../../shared/component/CheckBox';
import { Task } from '../../context/todos';
import styles from './TaskListItem.module.css';

const TaskListItem = ({ task, onComplete, onDelete }: Props) => {
	return (
		<div className={styles.container}>
			<CheckBox
				type="circle"
				checkValue={task.completed}
				Action={() => onComplete(task)}
			/>
			<div className={styles.description}>{task.description}</div>
			<CheckBox
				type="square"
				checkValue={false}
				Action={() => onDelete(task)}
			/>
			{/* <div className={styles.delete}>
				<input type="checkbox" onChange={() => onDelete(task)} name={task.id} />
			</div> */}
		</div>
	);
};

type Props = {
	task: Task;
	onComplete(task: Task): void;
	onDelete(task: Task): void;
};

export { TaskListItem };

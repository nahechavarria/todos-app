import { Task } from '../../context/todos';
import styles from './CheckBox.module.css';

const CheckBox = (handleChange: (task: Task) => void) => {
	return (
		<label>
			<input type="checkbox" onChange={() => handleChange} />
			<span></span>
		</label>
	);
};

export { CheckBox };

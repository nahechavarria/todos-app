import styles from './InputField.module.css';

export const InputField = () => {
	return (
		<>
			<input
				className={styles.style}
				type="text"
				id="task"
				name="task"
				placeholder="New task"
			/>
		</>
	);
};

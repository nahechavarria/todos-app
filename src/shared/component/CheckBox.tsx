import styles from './CheckBox.module.css';

const CheckBox = ({ type, checkValue, Action }: Props) => {
	const handleClick = () => {
		Action();
	};

	return (
		<div
			className={`${
				type === 'circle' ? styles.circleCheck : styles.squareCheck
			} ${checkValue ? styles.circleCheckCheked : ''}`}
			onClick={handleClick}
		></div>
	);
};

type Props = {
	type: string;
	checkValue: boolean;
	Action: () => void;
};

export { CheckBox };

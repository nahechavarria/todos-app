import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className={styles.container}>
			<ul className={styles.pagination}>
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={currentPage === number ? styles.active : ''}
						onClick={() => onPageChange(number)}
					>
						{number}
					</li>
				))}
			</ul>
		</nav>
	);
};

type Props = {
	currentPage: number;
	totalPages: number;
	onPageChange: (number: number) => void;
};

export { Pagination };

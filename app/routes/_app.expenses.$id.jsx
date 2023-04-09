import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export default function UpdateExpensesPage() {
	const navigate = useNavigate();

	function handleCloseModal() {
		navigate('..');
	}

	return (
		<Modal onClose={handleCloseModal}>
			<ExpenseForm />
		</Modal>
	);
}

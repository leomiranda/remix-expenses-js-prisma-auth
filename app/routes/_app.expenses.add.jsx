import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '../data/validation.server';

export default function AddExpensesPage() {
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

export async function action({ request }) {
	const formData = await request.formData();
	const expenseData = Object.fromEntries(formData);
	console.log('formData', formData);
	console.log('expenseData', expenseData);

	try {
		validateExpenseInput(expenseData);
	} catch (error) {
		return error;
	}

	await addExpense(expenseData);
	return redirect('/expenses');
}

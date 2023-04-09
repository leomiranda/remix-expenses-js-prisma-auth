import { Outlet } from '@remix-run/react';
import appStyles from '~/styles/app.css';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';

export default function ExpensesAppLayout() {
	return (
		<>
			<ExpensesHeader />
			<Outlet />
		</>
	);
}

export function links() {
	return [{ rel: 'stylesheet', href: appStyles }];
}

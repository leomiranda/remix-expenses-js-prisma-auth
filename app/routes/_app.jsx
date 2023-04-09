import { Outlet } from '@remix-run/react';
import appStyles from '~/styles/app.css';

export default function ExpensesAppLayout() {
	return <Outlet />;
}

export function links() {
	return [{ rel: 'stylesheet', href: appStyles }];
}

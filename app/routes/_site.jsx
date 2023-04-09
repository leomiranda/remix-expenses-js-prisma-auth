import { Outlet } from '@remix-run/react';
import siteStyles from '~/styles/site.css';
import MainHeader from '~/components/navigation/MainHeader';

export default function SiteLayout() {
	return (
		<>
			<MainHeader />
			<Outlet />
		</>
	);
}

export function links() {
	return [{ rel: 'stylesheet', href: siteStyles }];
}

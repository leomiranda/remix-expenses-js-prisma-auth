import { Outlet } from '@remix-run/react';
import siteStyles from '~/styles/site.css';

export default function SiteLayout() {
	return <Outlet />;
}

export function links() {
	return [{ rel: 'stylesheet', href: siteStyles }];
}

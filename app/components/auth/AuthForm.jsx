import { Link, useSearchParams } from '@remix-run/react';
import { FaLock, FaUserPlus } from 'react-icons/fa';

function AuthForm() {
	const [searchParams] = useSearchParams();
	const authMode = searchParams.get('mode') || 'login';
	const submitText = authMode === 'login' ? 'Login' : 'Create Account';
	const toggleText = authMode === 'login' ? 'Create Account' : 'Login';

	return (
		<form method="post" className="form" id="auth-form">
			<div className="icon-img">{authMode === 'login' ? <FaLock /> : <FaUserPlus />}</div>
			<p>
				<label htmlFor="email">Email Address</label>
				<input type="email" id="email" name="email" required />
			</p>
			<p>
				<label htmlFor="password">Password</label>
				<input type="password" id="password" name="password" minLength={7} />
			</p>
			<div className="form-actions">
				<button>{submitText}</button>
				<Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}>{toggleText}</Link>
			</div>
		</form>
	);
}

export default AuthForm;

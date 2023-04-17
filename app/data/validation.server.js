function isValidTitle(value) {
	return value && value.trim().length > 0 && value.trim().length <= 50;
}

function isValidAmount(value) {
	const amount = parseFloat(value);
	return !isNaN(amount) && amount > 0;
}

function isValidDate(value) {
	return value && new Date(value).getTime() < new Date().getTime();
}

export function validateExpenseInput(input) {
	let validationErrors = {};

	if (!isValidTitle(input.title)) {
		validationErrors.title = 'Please enter a valid title.';
	}

	if (!isValidAmount(input.amount)) {
		validationErrors.amount = 'Please enter a valid amount.';
	}

	if (!isValidDate(input.date)) {
		validationErrors.date = 'Please enter a valid date.';
	}

	if (Object.keys(validationErrors).length > 0) {
		throw validationErrors;
	}
}

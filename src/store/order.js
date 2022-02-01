class OrderStore {
	formData = {
		name: { label: 'Name', value: '' },
		email: { label: 'Email', value: '' },
		phone: { label: 'Phone', value: '' }
	};

	change = (name, value) => {
		formData[name].value = value.trim();
	}
}

export default new OrderStore();
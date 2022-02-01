import { useEffect } from "react";

const useClickOutside = (ref, fn) => {
	const clickOutsideHandler = (e) => {
		let path = e.path || e.composedPath();
		if (!path.includes(ref.current)) {
			fn();
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', clickOutsideHandler);
		document.addEventListener('touchstart', clickOutsideHandler);

		return () => {
			document.removeEventListener('mousedown', clickOutsideHandler);
			document.removeEventListener('touchstart', clickOutsideHandler);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref, fn]);
}

export default useClickOutside;
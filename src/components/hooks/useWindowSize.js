import { useEffect, useState } from "react";


function getWindowSize() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	}
};

function useWindowSize() {
	let [size, setSize] = useState(getWindowSize());
	let sizeHandler = () => {
		setSize(getWindowSize());
	}
	useEffect(() => {
		window.addEventListener('resize', sizeHandler);

		return () => {
			window.removeEventListener('resize', sizeHandler);
		}
	}, [])
	return size;
}

export default useWindowSize;

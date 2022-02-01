import React, { useRef,useState } from "react"
import useClickOutside from "../hooks/useClickOutside";
import styles from "./modal.module.css";

function ModalExample() {

	let [visible, setVisible] = useState(true);
	let close = () => setVisible(false);
	let rootEl = useRef();

	useClickOutside(rootEl, close);

	return <>
		{visible &&
		<div className={styles.modalBox} ref={rootEl}>
			<p>MODAL</p>
		</div>}
	</>	
}

export default ModalExample;
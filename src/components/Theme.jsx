import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
	const [day, setDay] = useState(true);

	function handleClick() {
		setDay(!day);
		document.body.classList.toggle("dark-theme");
	}

	return (
		<>
			<div className="theme-changer" onClick={handleClick}>
				{day ? <FaMoon size={28} /> : <FaSun size={28} />}
			</div>
		</>
	);
}

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

import React, { useState } from "react";
import ReactDOM from "react-dom";

const SuperForm = () => {
	const [currentValue, setValue] = useState("");
	return (
		<div>
			<h2>Your name is {currentValue ? currentValue : "Not defined"}</h2>
			<input
				type="text"
				onChange={e => setValue(e.target.value)}
				value={currentValue}
				placeholder="Please type your name"
			/>
		</div>
	);
};
ReactDOM.render(<SuperForm />, document.getElementById("app"));

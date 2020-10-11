import React from "react";
import './Details.css';


const Modal = (props) => {
return(
<div>
<h1>The Movie is on the list </h1>
<button onClick={props.setconditiondetails} className='Details-button'> Go back </button>
</div>
	)
}

export default Modal
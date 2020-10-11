import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import './Card.css';
import noimage from '../assets/noimage.jpg'




const Card = (props) => {
    let photo = null;
	if(props.cover === null){
	photo=(
	<div>
	<img src={noimage} alt='card img' className='Card-cover' />
	</div>
	)} else{ photo=( 
	<div> 
	<img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt='card img' className='Card-cover' /> 
	</div> )}

return(
	<div className='Card-container'  >
        <div className='Card-small'> 
	     {photo}
	    </div>
	 <h1 className='Card-title'>{props.title} </h1>
     <h1 className='Card-rating'>Rating: {props.rating} </h1>
     <Link to='/details'> <button className='Card-details' onClick={() => props.showDetails(props.id)} > See more </button> </Link>
	</div>
	)
}

export default Card
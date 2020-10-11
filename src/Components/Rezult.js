import React from "react";
import Card from './Card';
import './Rezult.css';


const Rezult = (props) => {

return(
	<div class='Rezult-container' >
    {props.movies.map((usher,i)=>{
    	return <Card showDetails={props.showDetails}  id={props.movies[i].id} title={props.movies[i].title} 
    	rating={props.movies[i].popularity} cover={props.movies[i].poster_path} />
    })}   
	</div>
	)
}

export default Rezult
import React from "react";
import './Favoriteslist.css';

import CardFav from './CardFav';

const Favoriteslist = (props) => {

 const mapfav = props.favlist.map((user,i)=>{
 	return <CardFav showDetailsFav={props.showDetailsFav} id={props.favlist[i].id} title={props.favlist[i].title} 
    	rating={props.favlist[i].popularity} cover={props.favlist[i].poster_path}/>
 })
return(
	<div className='Favoriteslist-container'>
    {mapfav}
	</div>
	)
}

export default Favoriteslist
import React from "react";
import './Favorites.css';
import Favoriteslist from './Favoriteslist';

const Favorites = (props) => {
	let favlistoutput = null;
	if(props.favlist.length === 0) {
		favlistoutput=( <div> <h1> No items on the list </h1> </div> )
	} 
	else{
	favlistoutput=( 	
	<Favoriteslist showDetailsFav={props.showDetailsFav} favlist={props.favlist} />  
                  )
	}
return(
<div className='Favorites-container'>
	<div>
	   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path xmlns="http://www.w3.org/2000/svg" fill="white" fill-opacity="1" d="M 0 288 L 48 256 C 96 224 192 160 288 154.7 C 384 149 480 203 576 224 C 672 245 768 235 864 213.3 C 960 192 1056 160 1152 154.7 C 1248 149 1344 171 1392 181.3 L 1440 192 L 1440 0 L 1392 0 C 1344 0 1248 0 1152 0 C 1056 0 960 0 864 0 C 768 0 672 0 576 0 C 480 0 384 0 288 0 C 192 0 96 0 48 0 L 0 0 Z" /></svg>
	</div>
	<div >
     {favlistoutput}
	</div>
</div>
	)
}

export default Favorites
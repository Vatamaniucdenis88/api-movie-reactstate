import React from "react";
import './Search.css';
import Rezult from './Rezult';

const Search = (props) => {
return(
	<div className='Search'>

	   <div className='Search-top'>
	   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path xmlns="http://www.w3.org/2000/svg" fill="white" fill-opacity="1" d="M 0 288 L 48 256 C 96 224 192 160 288 154.7 C 384 149 480 203 576 224 C 672 245 768 235 864 213.3 C 960 192 1056 160 1152 154.7 C 1248 149 1344 171 1392 181.3 L 1440 192 L 1440 0 L 1392 0 C 1344 0 1248 0 1152 0 C 1056 0 960 0 864 0 C 768 0 672 0 576 0 C 480 0 384 0 288 0 C 192 0 96 0 48 0 L 0 0 Z" /></svg>
	   </div>

	   <main className='Search-main'>
	   <h1 className='Search-title'>  Search movies </h1>
	     <div className='Search-smallcontainer'>
	       <input className='Search-input' type="text" placeholder='add text ...'  onChange={props.handleInput}  />
	       <button className='Search-button' onClick={props.doSearch}> Search </button>
	     </div>
	   </main>

	   <Rezult movies={props.movies} showDetails={props.showDetails}/>
         
	</div>
	)
}

export default Search
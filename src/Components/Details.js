import React from "react";
import './Details.css';
import Modal from './Modal'
import noimage from '../assets/noimage.jpg';
import {Switch, Route, Link} from 'react-router-dom';


const Details = (props) => {

    let photo = null;
if(props.currentMovie.poster_path === null )   { photo=(<img src={noimage} /> )} 
  else  { photo=(<img src={`https://image.tmdb.org/t/p/w300${props.currentMovie.poster_path}`}/> ) }


  let details =null;
  if(props.detailscondition === false ){
   details=( <div className='MovieInfo-container'>
       <h1 className='MovieInfo-title'> {props.currentMovie.original_title} </h1>
    <div className='MovieInfo-small'> 
           <div className='MovieInfo-mainphoto'> {photo} </div>
              <div className='MovieInfo-text'>
                  <p> Realease date: {props.currentMovie.release_date}</p>
                  <p > Description: {props.currentMovie.overview}</p>
                  <p> Rating: {props.currentMovie.popularity} </p>
                  <button onClick={props.addFavorites} className='Details-button' > Add </button> 
                 <Link to='/search' > <button className='Details-button'> Go back </button>  </Link>
              </div>
           </div>
           </div>)
  }
  else{
   details=(<Modal setconditiondetails={props.setconditiondetails}/>) 
  }



return( 

<div className='MovieInfo-top'>
    <div >
     
     {details}

    </div>
</div>
);
}

export default Details
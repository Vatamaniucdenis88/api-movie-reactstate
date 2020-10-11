import React from "react";
import './MainPage.css';

import logo from '.././assets/logo.png'

const MainPage = (props) => {
return(
   <div className='MainPage'>
         <main className='Main-container'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='Main-svg'><path className='MainPage-svg-path' xmlns="http://www.w3.org/2000/svg" fill="#ffd700" fill-opacity="1" d="M 0 288 L 48 272 C 96 256 192 224 288 202.7 C 384 181 480 171 576 192 C 672 213 768 267 864 266.7 C 960 267 1056 213 1152 181.3 C 1248 149 1344 139 1392 133.3 L 1440 128 L 1440 320 L 1392 320 C 1344 320 1248 320 1152 320 C 1056 320 960 320 864 320 C 768 320 672 320 576 320 C 480 320 384 320 288 320 C 192 320 96 320 48 320 L 0 320 Z" /></svg> 
            
            <div className='Main-content'>
            <h1 className='Main-title'> Movie Finder </h1>
            <p className='Main-text'> Find your favorite movies and add them to Favorites! </p>
            <img src={logo} alt='logo' className='Main-logo'/>
            </div>
             
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='Main-svg'><path xmlns="http://www.w3.org/2000/svg" fill="#ffd700" fill-opacity="1" d="M 0 192 L 48 197.3 C 96 203 192 213 288 229.3 C 384 245 480 267 576 272 C 672 277 768 267 864 261.3 C 960 256 1056 256 1152 229.3 C 1248 203 1344 149 1392 122.7 L 1440 96 L 1440 0 L 1392 0 C 1344 0 1248 0 1152 0 C 1056 0 960 0 864 0 C 768 0 672 0 576 0 C 480 0 384 0 288 0 C 192 0 96 0 48 0 L 0 0 Z" /></svg>
            
         </main>
         
         <foter className='Foter-container'>
            <p className='Foter-text'> This site is using APIs from themoviedb.org</p>
            <p className='Foter-text'> Site by Denis Vatamaniuc</p>
         </foter>   
   </div>
   )
}

export default MainPage
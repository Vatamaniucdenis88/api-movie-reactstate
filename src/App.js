import React, { Component } from 'react';
import search from './assets/search.png';
import './App.css';
import MainPage from './Components/MainPage';
import Search from './Components/Search';
import Favorites from './Components/Favorites';
import Details from './Components/Details';
import {Switch, Route, Link} from 'react-router-dom';



class App extends Component {

state={
  movies:[],
  search:'',
  currentMovie:[],
  favlist:[],
  detailscondition: false

}
apiKey = process.env.REACT_APP_API

handleInput = (event)=>{
  this.setState({search:event.target.value}); 
}

showDetails =(id) =>{
  let filteredMovie = this.state.movies.filter(function(movie){ return movie.id == id } );
  this.setState({currentMovie: filteredMovie[0]},()=> console.log('favlist',this.state.currentMovie) )
   }

showDetailsFav =(id) =>{
  let filteredMovie = this.state.favlist.filter(function(movie){ return movie.id == id } );
  this.setState({currentMovie: filteredMovie[0]},()=> console.log('favlist2',this.state.favlist) )
   }

doSearch=(event)=> {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`)
    .then(data => data.json())
    .then(data=> { this.setState({movies:[...data.results]}); console.log(this.state.movies)  })   
}

addFavorites =()=>{
   const checkstate = this.state.favlist.map(user =>{return user.id})
   const checkid = this.state.currentMovie.id
   if (checkstate.includes(checkid) === true){ this.setState({detailscondition:true})} else{
   let joined = this.state.favlist.concat(this.state.currentMovie);
    this.setState({ favlist: joined } , ()=> console.log('favlist', this.state.favlist));
}}

setconditiondetails =()=>{
 this.setState({detailscondition:false}) 
}
  render() {
  return (
      <div className="App">
      <nav className='Nav-container'>
        <Link to='/'  className='Link'> <h1 className='Nav-text'> Movie Finder </h1> </Link>
        <Link to='/favorites' > <button className='Nav-button' > My Favorites </button> </Link>
        <Link to='/search' > <img src={search} alt='no image' className='Nav-img'/> </Link>
      </nav>

             <Route path='/' exact component={MainPage}/>
             <Route  path='/search' exact render={ props => <Search showDetails={this.showDetails} doSearch={this.doSearch} handleInput={this.handleInput}  movies={this.state.movies} /> }/>
             <Route path='/favorites' exact render={ props => <Favorites showDetailsFav={props.showDetailsFav} favlist={this.state.favlist} /> }/>
             <Route path='/details' exact render={ props => <Details setconditiondetails={this.setconditiondetails} detailscondition={this.state.detailscondition} addFavorites={this.addFavorites} status={this.state.status} currentMovie={this.state.currentMovie}/> }/>
       </div>
    );
  }
}

export default App;
import logo from './logo.svg';
import './App.css';
import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='Logo-container'>
        <img className='logo' src='"C:\Users\elish\OneDrive\Desktop\My-React-App\app-name\src\Foodapp.png"' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us </li>
          <li>Card</li>
        </ul>

      </div>
    </div>
  );
}

const RestaurantCard = (props) => {
  const{resName,cuisine} = props;
  return(
    <div className=''>
      <img/>
      <h3>Bunnys Family Restaurant</h3>
      <h4></h4>
      <h4></h4>
      <h4></h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='Search'>Search</div>
      <div className='res-container'></div>
      <RestaurantCard/>

    </div>
  )
}



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );

};

export default App;

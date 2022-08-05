import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundSvg from '../assets/cool-background.svg'
import AvaliableEvents from './AvaliableEvents'
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from 'react-router-dom';


const Main = (users, currentUser, handleLoginSuccess, userEvents, isLoggedIn, events, setEvents, handleCurrentUser, handleJoinEvent, handleLeaveEvent  ) => {
  
  
  return (

        <div className="App" style={{ backgroundImage: `url(${backgroundSvg})` }}>
          <Header 
            users={users} 
            currentUser={currentUser}
            handleLoginSuccess={handleLoginSuccess} 
            isLoggedIn={isLoggedIn}
          />
          {
            !isLoggedIn
            ?
              <div className='show-before-login'>

                    <Introduction />
                    <Content events={events} setEvents={setEvents} isLoggedIn={isLoggedIn}/>
              </div>
            : 
              <div className='show-after-login'>
                      <UserScreen
                        isLoggedIn={isLoggedIn}
                        user={currentUser} 
                        handleCurrentUser={handleCurrentUser}
                        userEvents={userEvents}
                        events={events}
                        handleJoinEvent={handleJoinEvent}
                        handleLeaveEvent={handleLeaveEvent}
                      />

              </div>
          }
        </div>

  );
}

export default Main;









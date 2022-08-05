import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundSvg from '../assets/cool-background.svg'
import AvaliableEvents from './AvaliableEvents'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Routes } from 'react-router-dom';


const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  
  
  useEffect(() => {
    const getEvents = () => {
      fetch('http://localhost:8000/events')
      .then(req => req.json())
      .then(res => setEvents(res))
    }
    getEvents()
  }, [])


  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8000/users')
      .then(req => req.json())
      .then(res => {
        // console.log(res)
        setUsers(res)
      })
    }
    getUsers()
  }, [])

  useEffect(() => {
    const defineUserEvents = () => {
      setUserEvents(currentUser.joined_events)
    }
    defineUserEvents()
  }, [isLoggedIn])
  
  
  const handleLoginSuccess = (user) => {
    handleCurrentUser(user)
    setIsLoggedIn(true)
  }
  
  const handleCurrentUser = (user) => {
    setCurrentUser((user))
  }
  

  
  const handleJoinEvent = (newEvent) => {
    alert('joining')
    // const newUserEvents = [...userEvents, newEvent]
    // setUserEvents(newUserEvents)
    setUserEvents(async (prevState) => {
      const updatedEvents = [...prevState, newEvent]
      let req = await fetch(`http://localhost:8000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ joined_events: updatedEvents })
      })
      let res = await req.json()
      setCurrentUser(res)
      return updatedEvents
      })
    }
  
  
  const handleLeaveEvent = async (eventToLeaveId) => {
    alert('leaving')
    setUserEvents(async (prevState) => {
      const filteredEvents = prevState.filter(evt => evt.id !== eventToLeaveId)
      let req = await fetch(`http://localhost:8000/users/${currentUser.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ joined_events: filteredEvents })
      })
      let res = await req.json()
      handleCurrentUser(res)
      return filteredEvents
    })
    // setIsJoined(isJoined => !isJoined)
  }
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundSvg})` }}>
      <Header 
        users={users} 
        currentUser={currentUser}
        handleLoginSuccess={handleLoginSuccess} 
        isLoggedIn={isLoggedIn}
        setCurrentUser={setCurrentUser}
      />
      {
        !isLoggedIn
        ?
          <div className='show-before-login'>
            <Introduction />
            <Content userEvents={userEvents} events={events} setEvents={setEvents} isLoggedIn={isLoggedIn}/>
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

export default App;









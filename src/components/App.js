import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'
import 'bootstrap/dist/css/bootstrap.min.css';


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
    setCurrentUser(user)
  }
  
  const handleJoinEvent = (newEvent) => {
    const newUserEvents = [...userEvents, newEvent]
    setUserEvents(newUserEvents)
  }
  
  const handleLeaveEvent = async (eventToLeaveId) => {
    // const updatedEvents = userEvents.filter((event) => {
    //   // console.log('leave', event.id)
    //   // console.log('card id', eventToLeaveId)
    //   return (
    //     event.id !== eventToLeaveId
    //   )
    // })
    setUserEvents(async(prevState) => {
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
    console.log(userEvents)
  }
  
  return (
    <div className="App">
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
            <Content events={events} setEvents={setEvents}/>
          </div>
        : 
          <div className='show-after-login'>
            <UserScreen
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


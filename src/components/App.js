import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'


const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [events, setEvents] = useState([])
  const [userEvents, setUserEvents] = useState([])
  const [userEventsIds, setUserEventsIds] = useState([])
  
  
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
    const associateUserEvents = () => {
      const _userEvents = events.filter((event) => {
        return (
          currentUser['joined_events'].includes(event.id)
        )
      })
      setUserEvents(_userEvents)
    }
    associateUserEvents()
  }, [currentUser])
  
  // useEffect(() => {
  //   const fillUserEvents = () => {
  //     console.log('death' , currentUser.joined_events)
  //     setUserEventsIds(currentUser.joined_events)
  //     console.log(userEventsIds)
  //   }
  //   fillUserEvents()
  // }, [currentUser, userEvents])

  const handleLoginSuccess = (user) => {
    handleCurrentUser(user)
    setIsLoggedIn(true)
  }
  

  const handleCurrentUser = (user) => {
    setCurrentUser(user)
    setUserEventsIds(user.joined_events)
  }

    const handleJoinEvent = (newEventId) => {
      const newUserEventsIds = [...userEventsIds, newEventId]
      setUserEventsIds(newUserEventsIds)
      console.log(userEventsIds)
    }

    const handleLeaveEvent = (eventToLeaveId) => {
      const newUserEventsIds = userEventsIds.filter((target) => target != eventToLeaveId)
      setUserEventsIds(newUserEventsIds)
      console.log(userEventsIds)
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
              joinedEvents={userEvents}
              events={events}
              handleJoinEvent={handleJoinEvent}
              handleLeaveEvent={handleLeaveEvent}
              userEventsIds={userEventsIds}
            />
          </div>
      }
    </div>
  );
}

export default App;


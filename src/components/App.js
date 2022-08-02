import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'


const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const[events, setEvents]=useState([])

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
  

  const handleLoginSuccess = (user) => {
    handleCurrentUser(user)
    setIsLoggedIn(true)
  }

  const handleCurrentUser = (user) => {
    setCurrentUser(user)
  }

  
  return (
    <div className="App">
      <button onClick={() => {
        console.log(userEvents)
      }}>Click</button>
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
            />
          </div>
      }
    </div>
  );
}

export default App;


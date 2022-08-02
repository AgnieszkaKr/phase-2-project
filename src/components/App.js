import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Introduction from './Introduction'
import UserScreen from './UserScreen'


const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false)
=======
  
>>>>>>> 96f03198c535f4b52b09e40b4f5ed26aaf920867

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

  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    // console.log('Hello, ', user.user_name)
    setIsLoggedIn(true)
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
            <Content />
          </div>
        : 
          <div className='show-after-login'>
            <UserScreen />
          </div>
      }
    </div>
  );
}

export default App;


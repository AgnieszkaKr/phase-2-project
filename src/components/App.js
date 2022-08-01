import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'


const App = () => {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:8000/users')
      .then(req => req.json())
      .then(res => {
        console.log(res)
        setUsers(res)
      })
    }
    getUsers()
  }, [])

  const handleLoginSuccess = (user) => {
    setCurrentUser(user)
    console.log('Hello, ', user.user_name)
  }

  return (
    <div className="App">
      <Header users={users} handleLoginSuccess={handleLoginSuccess} />
      <Content />
    </div>
  );
}

export default App;


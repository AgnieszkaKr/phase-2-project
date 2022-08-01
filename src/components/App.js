import {useEffect, useState} from 'react'
import Header from './Header'
import Content from './Content'


const App = () => {
  const[users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/users')
    .then(req => req.json())
    .then(res => setUsers(res))
  }, [])


  return (
    <div className="App">
      <Header />
      <Content />
      {users.map(user => {return <div><p>{user.user_name}</p> <img src={user.image} alt="img" /> </div>
    })}

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'

const App = () => {
  const [users, setUsers] = useState({})

  useEffect(() => {
    const getUsers = () => {
    }
  })
  
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;

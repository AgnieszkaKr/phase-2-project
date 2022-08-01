import { useState } from 'react'
import Header from './Header'
import Content from './Content'

const App = () => {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <Header />
      <Content />

    </div>
  );
}

export default App;

import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import data from '../data.json'
function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.getElementById('root').classList.toggle('dark-theme')
  }


 
  return (
    <div className='app' id='app'>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode} 
      />
      <Main
        data={data} 
      />
    </div>
  )
}

export default App

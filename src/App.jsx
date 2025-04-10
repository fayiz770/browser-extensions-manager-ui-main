import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [filteredData, setFilteredData] = useState('all')

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
        filteredData={filteredData}
        setFilteredData={setFilteredData} 
      />
      <footer>
        chalenged by <a href="https://www.frontendmentor.com/">Frontend Mentor </a> solved by  
        <a href="https://www.github.com/fayiz770"> Waris Fayiz</a>
      </footer>
    </div>
  )
}

export default App

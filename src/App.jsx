import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)
  // Toggle dark mode function
  // This function toggles the dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const styles = {
    backgroundColor: darkMode ? 'var(--Neutral-900)' : 'var(--Neutral-100)',
    color: darkMode ? '#ffffff' : '#000000'
  }
 
  return (
    <div className='app' style={styles}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode} 
      />
      <Main />
    </div>
  )
}

export default App

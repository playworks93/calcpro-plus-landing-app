import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import CalculatorDisplay from './components/CalculatorDisplay'
import InputPanel from './components/InputPanel'
import HistoryLog from './components/HistoryLog'
import TemplateManager from './components/TemplateManager'
import SettingsModal from './components/SettingsModal'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>CalcPro Plus</h1>
          <p className="tagline">Advanced Calculations Made Easy</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Real-time Collaborative Calculations</li>
          <li>Customizable Calculation Templates</li>
          <li>Data Visualization Tools</li>
          <li>History Log of Previous Calculations</li>
          <li>Cloud Backup and Sync</li>
          <li>User Profile and Settings Management</li>
          </ul>
        </div>
        <p>&copy; 2025 CalcPro Plus. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App
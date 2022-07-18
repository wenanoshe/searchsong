import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import SongSearch from './components/SongSearch';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Search song</h1>
      <SongSearch />
    </>
  )
}

export default App

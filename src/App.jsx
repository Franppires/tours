
import { useState, useEffect } from 'react'
import './App.css'
import Tours from './components/Tours'

const URL = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTours = async () => { 
    setLoading(true)
    try {
      const response = await fetch(URL)
      const data = await response.json()
    
      setLoading(false)
      setTours(data)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) { 
    return ( 
      <main>
        <h2>Loading</h2>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App

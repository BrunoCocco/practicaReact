import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='row'>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Aca va a aparecer un numero grande</h1>
      <div className='conter-numero'>{count}</div>
      <div className="row">
        <button className='offset-md-4 col-md-4' onClick={() => setCount((count) => count + 1)}>
          Sumo
        </button>

        <button  className='offset-md-4 col-md-4 mt-4' onClick={() => setCount((count) => count - 1)}>
          Resto
        </button>
        <p  className='mt-5'>
          parece medio una pabada no?
        </p>
        <p className="read-the-docs">obvio bobiiiii</p>
      </div>
    </>
  )
}

export default App

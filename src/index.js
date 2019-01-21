import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { useCursor } from './useCursor'
import './styles.css'

function App() {
  const [count, updateCount] = useState(0)
  const { x, y } = useCursor()

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>You clicked {count} times!</h2>
      <h2>
        mouse point: X is {x} - Y is {y}{' '}
      </h2>

      <button onClick={() => updateCount(c => c - 1)}>Decrement</button>
      <button onClick={() => updateCount(c => c + 1)}>Increment</button>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

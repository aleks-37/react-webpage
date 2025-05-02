import { useState } from 'react'
import './index.css' //for the flex styles

export default function App() {
  // Defining a list of colors to cycle through:
  const colors = ['#EF476F','#FFD166','#06D6A0','#118AB2','#073B4C']

  // To track which color we are on
  const [idx, setIdx] = useState(0)

  //advancing index, wrapping back to 0 when you hit colors.length:
  const nextColor = () => setIdx((i) => (i + 1) % colors.length)

  return (
    // Apply the current color as a background style:
    <div className="app-container" style={{ backgroundColor: colors[idx] }}>
      <button onClick={nextColor}>
        Next color
      </button>
    </div>
  )
}
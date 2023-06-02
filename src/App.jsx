import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formulario/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.scss'
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(prev => prev + 1)
  return(
    <div>
      <Link to={'/about'}>about)</Link>
      <br />
      <Link to={'/fuck'}>нет иди нахуй</Link>
      <br />
      <Link to={'/'}>come back</Link>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <Outlet />
    </div>
  )
}
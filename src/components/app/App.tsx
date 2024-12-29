import React, { useState } from 'react'
import '@/style.scss'
import { Link, Outlet } from 'react-router-dom'
import Footer from '@/pages/footer/footer'

export const App = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(prev => prev + 1)
  return(
    <div>
      <Link to={'/about'}>about)</Link>
      <br />
      <Link to={'/fuck'}>нет иди нахуй</Link>
      <br />
      <Link to={'/hutaochka'}>some hu tao?</Link>
      <br />
      <Link to={'/footer'}>footer</Link>
      <br />
      <Link to={'/'}>come back</Link>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <Outlet />
      <Footer />
    </div>
  )
}
import React from 'react'
import { useLocation } from 'react-router-dom'
import title from '../title/title'

const Back = () => {
    const location = useLocation()
  return (
    <div>
        <section className='back'>
            <h2>Home /{location.pathname.split("/")}</h2>
            <h1>{title}</h1>
        </section>
    </div>
  )
}

export default Back
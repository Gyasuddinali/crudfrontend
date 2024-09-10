import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'

export default function NavbarRouter() {
  return (
    <div className='container-fluid text-bg-danger' id='nav'>
     
<NavLink id='n' to="/">Home</NavLink>
<Link  id='a' to="/about">About</Link>
<Link id='c' to="/contact">Contact Us</Link>
<Link id='r' to="/register">Registration</Link>
<Link id='g' to="/getData">GetData</Link>
<Link id='u' to={"/updatedata"}>UpdataData</Link>
<Link id='d' to={"/deleteuser"}>DeleteUser</Link>

    </div>
  )
}

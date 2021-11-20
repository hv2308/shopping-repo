import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../../Context/Context'
import './Header.css'

const Header = () => {
    const{cartprod,setCardprod}=useContext(Cartcontext)
    return (
        <div className="header">
            <ul className='homeUl'>
                <li className='HomeLi'>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cart" >Cart({cartprod.length})</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header

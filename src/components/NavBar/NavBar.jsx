import React from 'react'
import {MenuItems} from "./MenuItems"
import './NavBar.scss'
import logo from '../../imgs/icons/logo.png'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
      <nav className='navbar navbar-expand-lg justify-content-between' id="navbar">
        <div className='container-fluid'>
          <div className='navbar-brand w-25'>
            <img className='w-50' src={logo} alt="" />
          </div>
          <div className='collapse navbar-collapse fs-5' id='navbarNav'>
            <ul className='navbar-nav justify-content-center'>
              {
              MenuItems.map((item,index)=>{
              return(
                <li key={index} className='nav-item'>
                  <a className={item.className} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
              })}
            </ul>
          </div>
          <div className='cart-widget'>
            <CartWidget/>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
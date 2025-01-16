import React from 'react'
import style from "./style.module.css"
import {Link , NavLink} from "react-router-dom"
import { FaBars } from "react-icons/fa";


function Navbar() {
  return (
    <div className={style.navbar}>
        <div className={style.nav}>
            <div className={style.bar}>
                <p><FaBars/></p>
            </div>
            <ul>
                <NavLink to="/"style={({isActive})=>
                isActive ? {color:"#7971E9"}:{color:"black"}
                } className={style.aa}>
                    Home
                </NavLink>
                <NavLink className={style.aa}>
                    About
                </NavLink>
                <NavLink className={style.aa}>
                    Shop
                </NavLink>
                <NavLink className={style.aa}>
                    Catalogue
                </NavLink>
                <NavLink className={style.aa}>
                    New Arrivals
                    </NavLink>
                    <NavLink to="/favorites" style={({isActive})=>
                isActive ? {color:"#7971E9"}:{color:"black"}
                } className={style.aa}>
                    Favorites
                </NavLink>

            </ul>

            <div className={style.add}>
                <Link to="/add"><button>Add</button></Link>
            </div>

        </div>

    </div>
  )
}

export default Navbar
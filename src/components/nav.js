import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./nav.css"

const Nav = () => {
    const cartLength = useSelector(state => state.cartLength)
    return(
        <div className="nav-container">
            <nav className="navigation">
                <Link to='/'>Products</Link>
                <Link to='/checkout'>Checkout <span>{cartLength}</span></Link>
            </nav>
        </div>
    )
}

export default Nav
import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'

function Layout({children}) {
    return (
        <div className="container">
            <NavBar/>
            <Notify/>
            {children}
        </div>
    )
}

export default Layout


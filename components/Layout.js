import React from 'react'
import Modal from './Modal'
import NavBar from './NavBar'
import Notify from './Notify'

function Layout({children}) {
    return (
        <div className="container">
            <NavBar/>
            <Notify/>
            <Modal/>
            {children}
        </div>
    )
}

export default Layout


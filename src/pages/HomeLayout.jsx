import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <>
            <nav>
                <span className=''>Comfartable</span>
            </nav>
            <Outlet />
        </>
    )
}

export default HomeLayout
import React from 'react'
import Head from './Head'
import Sidebar from './Sidebar'
import Body from './Body'

const AppLayout = () => {
    return (
        <>
            <Head />
            <div className='flex'>
                <Sidebar />
                <Body />
            </div>

        </>
    )
}

export default AppLayout
import {useDarkMode} from 'context/darkMode'
import React from 'react'

const Admin = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`flex h-screen w-full bg-gray-${darkMode ? '900' : '400'}`}>
            Index del panel de Admin
        </div>
    )
}

export default Admin;

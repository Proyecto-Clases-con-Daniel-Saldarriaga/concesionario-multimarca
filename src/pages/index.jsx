import {useDarkMode} from 'context/darkMode'
import React from 'react'

const Index = () => {
    const {darkMode} = useDarkMode()
    return (
        <div className={`flex h-screen bg-gray-${darkMode ? '900' : '400'}`}>Index</div>
    )
}

export default Index

import React from 'react'
import ImagenLogo from 'components/ImagenLogo'
import { Link } from 'react-router-dom'

const AuthLayout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-center bg-gray-200 py-2 px-4'>
            <div className='w-full flex items-start'>
                <Link to='/'>
                <i className='fas fa-home cursor-pointer hover:text-indigo-500' />
                </Link>
            </div>
            <div className='flex w-full '>
                <ImagenLogo/>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout

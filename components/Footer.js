import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-purple-700 h-16 flex justify-center flex-col items-center fit-'>
            <div className="logo text-white text-center font-bold text-2xl">
                <Link href="/">BitLinks</Link>
            </div>
            <div className='text-white '>&copy; BitLinks. All Rights Reserved.</div>

        </div>
    )
}

export default Footer

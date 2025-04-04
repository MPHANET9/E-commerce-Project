import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className="container px-4">
                <div className="flex w-fit gap-10 mx-auto font-mediam py-4 text-gray-950">
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >HOME</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

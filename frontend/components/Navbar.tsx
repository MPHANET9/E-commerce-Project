import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className="w-full px-4">
                <div className="flex w-fit gap-10 mx-auto font-mediam py-4 text-gray-950">
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >HOME</Link>
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >SMOOTHY</Link>
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >FOOD</Link>
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >BAKED TREAT</Link>
                    {/**caskes and muffins fall under this category */}
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >HOT BEVERAGE</Link>
                    <Link
                        className="navbar__link relative"
                        href="#"
                    >COLD BEVERAGE</Link>
                    {/**Milkshakes fall under this category */}
                </div>
            </div>
        </div>
    )
}

export default Navbar;

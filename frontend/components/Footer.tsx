import React from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="w-full p-5 bg-neutral-800">
            <div className='flex justify-between items-center'>
                <div><p className='text-gray-200'>@2025 Wholesome Cup, Inc. All rights reserved</p></div>
                <div className="flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <BsFacebook />
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

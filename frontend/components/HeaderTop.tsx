import React from "react";
import { BsFacebook } from "react-icons/bs";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 ">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderTop;
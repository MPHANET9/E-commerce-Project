import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderTop = () => {
    return (
        <div className="border-b border-gray-200 ">
            <div className="container py-4 px-4 w-full">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top__icon_wrapper">
                            <BsFacebook />
                        </div>
                        <div className="header_top__icon_wrapper">
                            <BsInstagram />
                        </div>
                    </div>
                    <div className="w-[70px]">
                        <select
                            className="text-gray-500 text-[12px] font-bold"
                            name="category"
                            id="category"
                        >
                            <option value="smoothies">Smoothies</option>
                            <option value="bakery">Baked Treats</option>
                        </select>
                    </div>
                    <div className="text-gray-500 text-[12px]">
                        <b>Maseru, Lesotho</b>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeaderTop;
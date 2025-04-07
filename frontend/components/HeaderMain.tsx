import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart, FiShoppingBag } from "react-icons/fi";

const HeaderMain = () => {
    return (
        <div className="border-b border-gray-200 py-5">
            <div className="w-full flex justify-between items-center gap-5 px-4">
                <div className="hidden lg:flex font-bold text-4l text-center pb-4 sm:pb-0 text-gray-950">
                    Logo
                </div>
                <div className="w-90% sm:w-[300px] md:w-full relative">
                    <input
                        className="border-gray-200 border p-2 px-4 rounded-lg w-full"
                        type="text"
                        placeholder="Enter any product name..."
                    />
                    <BsSearch
                        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
                        size={20}
                    />
                </div>
                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <BiUser />

                    <div className="relative">
                        <FiHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
                            text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                            0
                        </div>
                    </div>

                    <div className="relative">
                        <FiShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
                            text-[12px] text-white grid place-items-center translate-x-1 translate-y-1">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain;
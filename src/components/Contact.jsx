import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { LuFacebook, LuTwitter, LuMail, LuInstagram } from "react-icons/lu";


const Contact = () => {
    return (
        <div className="bg-[#005f7f]  pl-[100px] pr-[100px] pt-[50px] pb-[50px]">
        <div className="flex justify-betweenpt-[50px] ">
            <div className="w-full">
                <div className="items-center justify-center"><h1 className="flex gap-[2px] text-white text-2xl font-bold "><FiBookOpen className="text-[#facc15] text-3xl" />Literary</h1></div>
                <p className="max-w-[60%] text-white">Your gateway to endless stories and knowledge. Discover, read, and grow with our curated collection.</p>
                <div className="flex text-white">
                    < LuFacebook />
                    <LuTwitter />
                    <LuInstagram />
                    <LuMail />
                </div>
            </div>
            <div className="w-full">
                <h1 className="text-[#facc15]">Quick Links</h1>
                <p className="text-white">About Us</p>
                <p className="text-white"> Contact</p>
                <p className="text-white">FAQ</p>
                <p className="text-white">Shipping Info</p>

            </div>
            <div className="w-full">
                <h1 className="text-[#facc15]">Categories</h1>
                <p className="text-white">Fiction</p>
                <p className="text-white">Non-fiction</p>
                <p className="text-white"> Romance</p>
                <p className="text-white"> Fantasy</p>
            </div>
            <div className="w-full">
                <h1 className="text-[#facc15]">Customer Service</h1>
                <p className="text-white"> My Account</p>
                <p className="text-white"> Order Tracking</p>
                <p className="text-white">Returns</p>
                <p className="text-white">Help Center</p>
            </div>
        </div>
            <div class="w-full h-[1px] bg-white my-4"></div>
            <p className="text-white text-center"> © 2024 Literary. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>

    )
}
export default Contact
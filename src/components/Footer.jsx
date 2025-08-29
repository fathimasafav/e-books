import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { LuFacebook, LuTwitter, LuMail, LuInstagram } from "react-icons/lu";


const Footer = () => {
    return (
        <div className="bg-[#005f7f]   p-[40px] md:p-[60px] lg:p-[75px] xl:p-[100px] dark:bg-[#ffff]">
        <div className="flex flex-col  md:flex-row justify-between pt-[50px] ">
            <div className="w-full text-center flex flex-col items-center mb-5">
                    <div className="items-center justify-center"><h1 className="flex gap-[2px] text-white text-2xl font-bold dark:text-[#13386c]"><FiBookOpen className="text-[#facc15] text-3xl" />Literary</h1></div>
                    <p className="max-w-[60%] text-white dark:text-[#13386c]">Your gateway to endless stories and knowledge. Discover, read, and grow with our curated collection.</p>
                    <div className="flex text-white dark:text-[#13386c]">
                    < LuFacebook />
                    <LuTwitter />
                    <LuInstagram />
                    <LuMail />
                </div>
            </div>
                <div className="w-full text-center flex flex-col items-center mb-5">
                <h1 className="text-[#facc15]">Quick Links</h1>
                    <p className="text-white dark:text-[#13386c]">About Us</p>
                    <p className="text-white dark:text-[#13386c]"> Contact</p>
                    <p className="text-white dark:text-[#13386c]">FAQ</p>
                    <p className="text-white dark:text-[#13386c]">Shipping Info</p>

            </div>
                <div className="w-full text-center flex flex-col items-center mb-5">
                <h1 className="text-[#facc15] ">Categories</h1>
                    <p className="text-white dark:text-[#13386c]">Fiction</p>
                    <p className="text-white dark:text-[#13386c]">Non-fiction</p>
                    <p className="text-white dark:text-[#13386c]"> Romance</p>
                    <p className="text-white dark:text-[#13386c]"> Fantasy</p>
            </div>
                <div className="w-full text-center flex flex-col items-center">
                <h1 className="text-[#facc15]">Customer Service</h1>
                    <p className="text-white dark:text-[#13386c]"> My Account</p>
                    <p className="text-white dark:text-[#13386c]"> Order Tracking</p>
                    <p className="text-white dark:text-[#13386c]">Returns</p>
                    <p className="text-white dark:text-[#13386c]">Help Center</p>
            </div>
        </div>
            <div class="w-full h-[1px] bg-white my-4 dark:bg-[#13386c] "></div>
            <p className="text-white text-center dark:text-[#13386c]"> © 2024 Literary. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>

    )
}
export default Footer
import React from "react";
import { LuMail } from "react-icons/lu";
const News = () => {
return (
    <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px]  ">
        <div className="bg-[#005f7f] rounded items-center justify-center flex flex-col pt-[50px] pb-[50px]">
            <h1 className="text-[#facc15]"><LuMail className=" h-12 w-12 mb-6" /></h1>
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with Literary News</h2>
            <p className="text-xl text-white">Get the latest book recommendations, author interviews, and exclusive offers delivered to your inbox.</p>
            <div className="gap-4 flex mt-4">
                <input
                    placeholder="Enter your email address"
                    className="bg-white/10 border-white/20 rounded text-white  pr-[12px] pl-[12px] pt-[8px] pb-[8px] "
                    />
                <button className="text-white p-[10px bg-[#facc15] rounded pr-[12px] pl-[12px] pt-[8px] pb-[8px]"> Subscribe Now</button>   
            </div>
            <p className=" mt-4 text-white">Join 50,000+ book lovers. Unsubscribe anytime.</p>
        </div>

    </div>
    )

}
export default News
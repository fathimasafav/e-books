import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiShining2Fill } from "react-icons/ri";


const HeroSection = () => {
    return (
        <section className="bg-[#005f7f] dark:bg-[#496c9b] flex   flex-col-reverse md:flex-row p-[40px] md:p-[60px] lg:p-[75px] xl:p-[100px] ">
            <div className=" w-full flex flex-col gap-[12px]">
                <p className="text-sm font-medium text-[#facc15] flex items-center gap-2 "><RiShining2Fill/>Curated Collection</p>
                <h1 className=" font-bold text-white max-w-[70%]  text-xl md:text-3xl xl:text-5xl dark:text-[#13386c] ">Discover Your Next <span className="text-[#facc15] dark:text-[#ffcc33]">Literary Adventure</span></h1>
                <p className="text-xl text-white md:text-lg  dark:text-[#13386c]">Explore thousands of carefully curated books across every genre. From timeless classics to contemporary bestsellers.</p>
                <div className="flex gap-[10px]">
                    <button className="bg-[#facc15] text-white rounded gap-[5px] flex items-center text-center  py-[3px] px-[9px] md:flex-row  xl:py-[12px] px-[12px] dark:text-[#13386c]">Explore Collection <FaArrowRight /></button>
                    <button className=" rounded bg-[#ffff] py-[5px] px-[5px] xl:py-[12px] px-[12px] dark:text-[#183a68] dark:bg-[#3c4454]">View Bestsellers</button>
                </div>
            </div>
            <div className="w-full">
                <img
                src="heroBooks.jpg"
                alt="img"
              
                />

            </div>
        </section>
    )
}
export default HeroSection

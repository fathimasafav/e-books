import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiShining2Fill } from "react-icons/ri";


const HeroSection = () => {
    return (
        <section className="bg-[#005f7f] flex p-[100px] ">
            <div className=" w-full flex flex-col gap-[12px]">
                <p className="text-sm font-medium text-[#facc15] flex items-center gap-2"><RiShining2Fill/>Curated Collection</p>
                <h1 className="text-5xl font-bold text-white max-w-[70%]">Discover Your Next <span className="text-[#facc15]">Literary Adventure</span></h1>
                <p className="text-xl text-white">Explore thousands of carefully curated books across every genre. From timeless classics to contemporary bestsellers.</p>
                <div className="flex gap-[10px]">
                    <button className="bg-[#facc15] text-white rounded pl-[32px] pt-[12px] pr-[32px] pb-[12px]  gap-[5px] flex items-center text-center">Explore Collection <FaArrowRight /></button>
                    <button className="pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded bg-[#ffff]">View Bestsellers</button>
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

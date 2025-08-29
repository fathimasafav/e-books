import React, { useEffect, useState } from 'react'
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Search from './Search';
import { Link } from "react-router-dom";
import { FiBookOpen, FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";


import useBookStore from '../store/zustand';

const Header = () => {
    const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
    const [isOpen, setIsOpen] = useState(false);
    const { searchTerm, setSearchTerm } = useBookStore();

    

    const toggleDark = () => {

        setDark(!dark)
    }

    useEffect(() => {
        const htmlEl = document.documentElement;
        if (dark) {
            htmlEl.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            htmlEl.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [dark])


    return (
        <>
        <header className="flex justify-between items-center sticky top-0 bg-white/50 z-10 py-[19px] px-[20px] md:px-[40px] lg:px-[75px] xl:px-[100px] dark:bg-[#3c4454] ">
            <div className="items-center justify-center"><h1 className="flex  flex-col gap-[2px] text-[#344256] dark:text-[#f8f6f4] text-lg font-bold md:flex-row  md:text-2xl"><FiBookOpen className="text-[#344256] text-lg md:text-3xl dark:text-[#f8f6f4]" />Literary</h1></div>
            <div className="w-[600px]"><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
            <div className="flex justify-between ">
                <nav className="hidden xl:flex gap-[16px] text-[#344256] dark:text-[#f8f6f4]">
                    <a href="#" className="hover:font-semibold ">Home</a>
                    <a href="#" className="hover:font-semibold">Categories</a>
                    <a href="#" className="hover:font-semibold">BestSellers</a>
                    <a href="#" className="hover:font-semibold">New&nbsp;Arrival</a>
                </nav>
            </div>
            <div className="flex flex-col gap-[5px] gap-[10px] md:flex-row">
                <button onClick={toggleDark}>{dark ? <CiDark className="dark:text-white" /> : <MdDarkMode />}</button>
                <Link to="/CartPage"><button className="text-[#344256]dark:text-white hover:bg-yellow-400 rounded p-2"><IoCartOutline className="dark:text-white" /></button></Link>
                <Link to="/profile"><button className="text-[#344256] dark:text-white hover:bg-yellow-400 rounded p-2"><FiUser className="dark:text-white  " /></button></Link>
            </div>


            {/* Hamburger (mobile only) */}
            <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-[#344256] text-2xl;">{isOpen ? <FaTimes /> : <FaBars />}</button>
        </header>

        {
        isOpen && (
            <div className="xl:hidden flex flex-col items-center bg-white shadow-md py-4 gap-4 pr-[100px]">

                <a href="#" className="hover:font-semibold">Home</a>
                <a href="#" className="hover:font-semibold">Categories</a>
                <a href="#" className="hover:font-semibold">BestSellers</a>
                <a href="#" className="hover:font-semibold">New Arrival</a>

            </div>

        )
    }
    </>
    )
}

export default Header
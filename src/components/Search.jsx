import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({searchTerm,setSearchTerm}) =>{
    return(
        <div >
            <div className="flex justify-center items-center relative  rounded border focus:outline-none dark:border-[#a4afbc]">
                <FaSearch className="absolute left-[10px] dark:text-[#a4afbc]"/>
                <input
                
                    type="text"
                    placeholder="Search for books, authors, or genres..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-[32px] md:pr-[2px]  pr-[2px] py-[5px] dark:text-[#a4afbc]"
                />
            </div>
        </div>

    )
}
export default Search;
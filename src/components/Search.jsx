import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({searchTerm,setSearchTerm}) =>{
    return(
        <div >
            <div className="flex justify-center items-center w-full  relative min-w-xl rounded border focus:outline-none ">
                <FaSearch className="absolute left-[2px]"/>
                <input
                
                    type="text"
                    placeholder="Search for books, authors, or genres..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=" w-full p-2 pl-4 bg-white"
                />
            </div>
        </div>

    )
}
export default Search;
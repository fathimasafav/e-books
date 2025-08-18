import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({searchTerm,setSearchTerm}) =>{
    return(
        <div>
            <div className="flex pl-[100px] pr-[100px] justify-center items-center gap-[20px] pt-[50px] pb-[50px] ">
                <FaSearch  className=""/>
                <input
                
                    type="text"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-2xl p-3 rounded-lg border focus:outline-none"
                />
            </div>
        </div>

    )
}
export default Search;
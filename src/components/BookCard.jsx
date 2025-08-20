import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaStar } from "react-icons/fa";


const BookCard = ({ book: { title, author, coverImage, price, rating } }) => {
    // console.log(coverImage, "cover");

    return (
        <div className=" rounded p-[16px] shadow-md ">

            <div className="grid rounded-lg hover:scale-105 transition-all duration-300 relative">
                <img
                    src={`http://localhost:4000/uploads/${coverImage}`}
                    alt={title}
                    className="w-full max-h-[450px] object-cover rounded"
                />
                <h3 className="font-semibold text-[#344256] ">{title}</h3>
                <p className="text-sm text-[#344256]">by {author}</p>
                <p className="text-lg font-bold text-[#344256]">${price}</p>
                <p className="text-sm text-[#344256] flex items-center gap-2"><FaStar className="text-[#facc15]"/>{rating}</p>
                <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className=" flex items-center   text-[#344256] bg-white rounded" ><IoCartOutline /> Add to Cart</button>
                    <button className="  text-[#344256] bg-white rounded"><FaHeart /></button>
                </div>
            </div>
        </div>
    )

}
export default BookCard
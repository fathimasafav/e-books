import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart, FaStar } from "react-icons/fa";


const BookCard = ({ book }) => {

    const userId = localStorage.getItem("userId")
    const HandleAddToCart = async () => {
        try {

            const token = localStorage.getItem("token");
            if(!token){
                alert("please login First");
                return
            }
            const res = await fetch("http://localhost:4000/api/v1/cart/add", {
                method: "POST",
                headers: { "content-Type": "application/json" ,
                    authorization:`Bearer ${token}`
                },
                body: JSON.stringify({
                    userId,
                    bookId: book._id,
                    quantity: 1,
                })
            })
            if (!res.ok) throw new Error("failed to fetch")
                const data=await res.json();
            console.log("cart Updated:",data)
            alert("Book added to the cart")

        } catch (err) {
            console.error(err)
        }
    }


    // console.log(coverImage, "cover");

    return (
        <div className=" rounded p-[16px] shadow-md ">

            <div className="grid rounded-lg hover:scale-105 transition-all duration-300 relative group">
                <img
                    src={`http://localhost:4000/uploads/${book.coverImage}`}
                    alt={book.title}
                    className="w-full max-h-[450px] object-cover rounded"
                />
                <h3 className="font-semibold text-[#344256] ">{book.title}</h3>
                <p className="text-sm text-[#344256]">by {book.author}</p>
                <p className="text-lg font-bold text-[#344256]">${book.price}</p>
                <p className="text-sm text-[#344256] flex items-center gap-2"><FaStar className="text-[#facc15]" />{book.rating}</p>
                <div className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col ">
                    <div className=""><button onClick={HandleAddToCart} className="flex items-center   text-[#344256] bg-yellow-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 " ><IoCartOutline /> </button></div>
                    {/* <button className=" flex items-center text-[#344256] bg-yellow-400 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2"><FaHeart /></button> */}
                </div>
            </div>
        </div>
    )

}
export default BookCard
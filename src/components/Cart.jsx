import React, { useEffect, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const Cart = () => {
    const [cart, setCart] = useState({ items: [] });
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')


    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await fetch(`http://localhost:4000/api/v1/cart/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                setCart(data);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };

        if (token && userId) {
            fetchCart();
        }
    }, [token, userId]);
    

    const HandleRemove = async (bookId) => {
        try {
            const res = await fetch(`http://localhost:4000/api/v1/cart/${userId}/${bookId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setCart(data.cart); // ✅ update cart after removal
        } catch (err) {
            console.error("Error removing item:", err);
        }
    };
    // console.log(111)

    return (
        <div className="  ">
            <div className="pb-[30px] ">
            <div className="flex  gap-[10px] items-center items-end ">
                <Link to="/home"><button className="text-2xl font-semibold text-[#344256] "><FaArrowLeft /></button></Link>
                <h2 className="text-3xl font-bold text-[#344256] ">Shopping Cart</h2>
            </div>
            <p className="text-semibold text-[#344256]">{cart.items.length} items in your cart</p>
            </div>
            {cart.items.length === 0 ? (<p>your cart is empty</p>) : (<div>
                {cart.items.map((item) => (
                    <div className="mb-[30px] "
                        key={item.bookId._id}>

                        <div className="flex gap-7 border border-gray-400 p-[30px] rounded-lg gap-[20px]">
                            <img
                                src={`http://localhost:4000/uploads/${item.bookId.coverImage}`}
                                alt={item.bookId.title}
                                className="min-w-[130px] h-[200px] object-cover rounded "
                            />
                            <div className="flex flex-col w-[50%] justify-center">
                                <h3 className="font-semibold text-[#344256]">{item.bookId.title}</h3>
                                <p className="text-sm text-[#344256]">by {item.bookId.author}</p>
                                <p className="text-lg font-bold text-[#344256]">${item.bookId.price}</p>
                                <p className="text-sm text-[#344256] flex items-center gap-2"><FaStar className="text-[#facc15]" />{item.bookId.rating}</p>
                                <div className="flex justify-between">
                                <p className="text-sm text-[#344256]">Qty: {item.quantity}</p>
                                    <button onClick={() => HandleRemove(item.bookId._id)} className=" text-red-500 text-2xl hover:text-red-700"><MdDelete/></button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>)}
        </div>
    )


}
export default Cart;
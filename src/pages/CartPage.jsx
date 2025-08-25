import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
// import Cart from "../components/Cart";

const CartPage = () => {
    return (
        <div >
            <div className="p-[50px]" >
                {/* <Cart /> */}
                <Cart />
            </div>
            <Footer/>
        </div>
        
    );
};

export default CartPage;
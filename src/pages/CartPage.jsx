import React from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Cart from "../components/Cart";

const CartPage = () => {
    return (
        <div >
            <Header/>
            <div className="p-[50px] dark:bg-[#2e3949]" >
                {/* <Cart /> */}
                <Cart />
            </div>
            <Footer/>
        </div>
        
    );
};

export default CartPage;
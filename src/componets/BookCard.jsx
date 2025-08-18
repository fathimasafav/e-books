import React from "react";

const BookCard = ({book:{title,author,coverImage,price}})=>{
    // console.log(coverImage, "cover");
    
    return(
        <div className="grid">
            <img
                src={`http://localhost:4000/uploads/${coverImage}`}
                alt={title}
                className="w-full"
            />
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{price}</p>
        </div>
    )

}
export default BookCard
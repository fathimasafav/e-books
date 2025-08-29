import axios from "axios";
import React, { useEffect, useState } from "react";

const ImagesPage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                setLoading(true);
                const res = await axios.post("http://localhost:4000/api/v1/book");

                if (res.data) {
                    setBooks(res.data.data)
                } else {
                    alert("error occured")
                }

                // axios.get("url").then((res) => {
                //     if (res.data) {
                //         setBooks(res.data.data)
                //     } else {
                //         alert("error occured")
                //     }
                // })
            } catch (err) {
                console.error(err);
                setError("Failed to load books");
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Books</h2>
            {books.map(book => (
                <div key={book.id}>
                    <p>{book.title}</p>
                    <img
                        src={`http://localhost:4000/uploads/${book.coverImage}`}
                        alt={book.title}
                        className="w-full max-h-[450px] object-cover rounded"
                    />
                    </div>
                
            ))}
        </div>
    );
};

export default ImagesPage;

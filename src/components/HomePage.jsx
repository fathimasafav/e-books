import React, { useEffect, useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import Search from "../componets/Search";
import BookCard from "../componets/BookCard";
import { FiGrid } from "react-icons/fi";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    // const[bookList,setBookList]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("");



    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/v1/book");
                const data = await res.json();

                // If API returns { books: [...] }
                console.log("Fetched data:", data);
                setBooks(data.data || []);

            } catch (error) {
                console.error(error)
                alert("something went wrong")
            }
        };
        fetchBooks();
    }, [])

    const categories = ["All", ...new Set(books.map(book => book.category).filter(Boolean))];


    const filteredBooks = books.filter((book) => {
        const matechSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase());
        const matechCategory = selectedCategory === "All" || book.category === selectedCategory
        return matechSearch && matechCategory
    });

    let sortedBook = [...filteredBooks];
    if (sortOption === 'asc') {
        sortedBook.sort((a, b) => Number(a.price) - Number(b.price)); // Low  to High
    } else if (sortOption === 'desc') {
        sortedBook.sort((a, b) => Number(b.price) - Number(a.price)); // High to low
    }


    return (
        <div>
            <header className="flex justify-between pl-[100px] pr-[100px] pt-[19px] pb-[19px]">
                <div ><h1 className="flex gap-[20px]"><FiBookOpen className="text-blue-700 text-3xl" />eLibrary</h1></div>
                <nav className=" flex gap-[100px]">
                    <a href="#">Home</a>
                    <a href="#">Categories</a>
                    <a href="#">My-Library</a>
                    <a href="#">Logout</a>
                </nav>

            </header>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            
            <div className="flex gap-[20px]">

            <div className="flex items-center gap-1 pl-[100px] pr[100px] pb-[50px]">
                <FiGrid />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                    ))}

                </select>

            </div>
            <div>
                <label>Sort by</label>
                <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">Defult</option>
                    <option value="asc">Price (Low → High)</option>
                    <option value="desc">Price (High → Low)</option>
                </select>

            </div>
            </div>


            <div className="grid grid-cols-3 pl-[100px] pr-[100px] gap-[10px] ">
                {sortedBook.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}

            </div>
        </div>

    )
}
export default Home
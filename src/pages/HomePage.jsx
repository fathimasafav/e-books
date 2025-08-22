import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import { FiGrid, FiUser, FiBook, FiBookOpen } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import HeroSection from "../components/HeroSection";
import { CiHeart } from "react-icons/ci";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import News from "../components/NewsLetter";
import { FaFire, FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



const categoryIcons = {
    Thriller: <FaFire />,
    Fiction: <FiBook />,
    Fantasy: <FaStar />,
    Science: <MdOutlineScience />,
    "Non-Fiction": <AiOutlineThunderbolt />,
    Romance: <CiHeart />,
}

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

    const categoryCounts = books.reduce((acc, book) => {
        if (book.category) {
            acc[book.category] =
                (acc[book.category] || 0) + 1;
        }
        return acc;
    }, {})
    const categories =
        Object.keys(categoryCounts);

    // const categories = ["All", ...new Set(books.map(book => book.category).filter(Boolean))];


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
        <div >
            <header className="flex justify-between pl-[100px] pr-[100px] pt-[19px] pb-[19px] items-center sticky top-0 bg-white/50 z-10">
                <div className="items-center justify-center"><h1 className="flex gap-[2px] text-[#344256] text-2xl font-bold "><FiBookOpen className="text-[#344256] text-3xl" />Literary</h1></div>
                <div className=""><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /></div>
                <div className="flex justify-between ">
                    <nav className=" flex gap-[16px] text-[#344256] ">
                        <a href="#" className="hover:font-semibold">Home</a>
                        <a href="#" className="hover:font-semibold">Categories</a>
                        <a href="#" className="hover:font-semibold">BestSellers</a>
                        <a href="#" className="hover:font-semibold">New Arrival</a>
                    </nav>
                </div>
                <div className="flex gap-[5px] gap-[10px]">
                    <Link to="/cart"><button className="text-[#344256] hover:bg-yellow-400 rounded p-2"><IoCartOutline /></button></Link>
                    <Link to="/profile"><button className="text-[#344256] hover:bg-yellow-400 rounded p-2"><FiUser /></button></Link>
                </div>
            </header>
            <HeroSection />

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

            <div className="bg-[rgb(253,250,246)]">
                {/*Browse by category  */}
                <div className="text-center  ">
                    <h1 className="text-4xl font-bold text-[#344256]">Browse by category </h1>
                    <p className="text-xl text-[#344256]">Find your perfect read in our carefully organized collections</p>
                    <div className="flex justify-between gap-[30px] p-[100px]">{categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            variant
                            className="hover:scale-105 transition-all duration-300 p-8 bg-[#AEC6CF] w-full    rounded hover:bg-yellow-400 cursor-pointer flex flex-col items-center"
                        >
                            <span>{categoryIcons[cat] || <FiBook />}
                            </span>
                            <h1 className="font-semibold text-[#344256]">{cat}</h1>
                            <p className="text-sm text-[#344256]">{categoryCounts[cat]}books</p>

                        </button>
                    ))}</div>
                </div>
                <div className="pl-[100px] pr-[100px] ">
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold text-[#344256] ">Featured Books</h1>
                            <p className="text-[#344256]">Hand-picked recommendations from our literary experts</p>
                        </div>
                        <div className="justify-items-end">  <button className="pt-[8px] pl-[16px] pb-[8px] pr-[16px] flex items-center gap-2 text-[#344256] justify-rigth border-[1px] rounded cursor-pointer">
                            View All <FaArrowRight /></button>
                        </div>

                    </div>

                    <div className="grid grid-cols-5  gap-[10px]  ">
                        {sortedBook.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}

                    </div>
                </div>
            </div>
            <News />
            <Footer />

        </div>

    )
}
export default Home
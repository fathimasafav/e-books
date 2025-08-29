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
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import { useSearchParam } from "react-use";
import { useSearchParams } from "react-router-dom"
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import Header from "../components/Header";


const categoryIcons = {
    Thriller: <FaFire />,
    Fiction: <FiBook />,
    Fantasy: <FaStar />,
    Science: <MdOutlineScience />,
    "Non-Fiction": <AiOutlineThunderbolt />,
    Romance: <CiHeart />,
}

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams(); // ✅ declare first

    // now you can safely read from it
    const [searchTerm, setSearchTerm] = useState(() => searchParams.get("q") || "");
    const [selectedCategory, setSelectedCategory] = useState(
        searchParams.get("category") || "All"
    );
    const [sortOption, setSortOption] = useState(searchParams.get("sort") || "");
    const [books, setBooks] = useState([]);

    // update URL whenever filters change
    useEffect(() => {
        const params = {};
        if (searchTerm) params.q = searchTerm;
        if (selectedCategory && selectedCategory !== "All")
            params.category = selectedCategory;
        if (sortOption) params.sort = sortOption;


        setSearchParams(params);
    }, [searchTerm, selectedCategory, sortOption, setSearchParams]);


    // useEffect(() => {

    //     fetchBooks();
    // }, []).
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // const params = new URLSearchParams();

                // if (query) params.append("q", query);
                // if (category && category !== "All") params.append("category", category);

                const url = `http://localhost:4000/api/v1/book?${searchParams.toString()}`;

                const res = await fetch(url)
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
    }, [searchParams])

    // useEffect(()=>{
    //     const delayDebounce=setTimeout(()=>{
    //         fetchBooks(searchTerm, selectedCategory)
    //     },500)
    //     return ()=> clearTimeout(delayDebounce)
    // },[searchTerm,selectedCategory])

    const categoryCounts = books.reduce((acc, book) => {
        if (book.category) {
            acc[book.category] =
                (acc[book.category] || 0) + 1;
        }
        return acc;
    }, {})
    const categories =
        ["All", ...Object.keys(categoryCounts)]

    // const categories = ["All", ...new Set(books.map(book => book.category).filter(Boolean))];


    // const filteredBooks = books.filter((book) => {
    //     const matechSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase());
    //     const matechCategory = selectedCategory === "All" || book.category === selectedCategory
    //     return matechSearch && matechCategory
    // });

    let sortedBook = [...books];
    if (sortOption === 'asc') {
        sortedBook.sort((a, b) => Number(a.price) - Number(b.price)); // Low  to High
    } else if (sortOption === 'desc') {
        sortedBook.sort((a, b) => Number(b.price) - Number(a.price)); // High to low
    }

    // const toggleDark = () => {
    //     const htmlEl = document.getElementsByTagName('html');
    //     htmlEl.className = "dark"
    // }


    return (
        <>




            <Header />


            <HeroSection />

            <div className="flex gap-[20px]">

                {/* <div className="flex items-center gap-1 pl-[100px] pr[100px] pb-[50px]  lg:pl-[75px] pr-[75px]">
                    <FiGrid />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((cat, idx) => (
                            <option key={idx} value={cat}>{cat}</option>
                        ))}

                    </select>

                </div> */}
                {/* <div>
                    <label>Sort by</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Defult</option>
                        <option value="asc">Price (Low → High)</option>
                        <option value="desc">Price (High → Low)</option>
                    </select>

                </div> */}
            </div>

            <div className="bg-[rgb(253,250,246)]">
                {/*Browse by category  */}
                <div className="text-center py-[50px] px-[20px]  md:px-[40px] lg:px-[75px] xl:px-[100px] dark:bg-[#3c4454]">
                    <h1 className="text-4xl font-bold text-[#344256] dark:text-white">Browse by category </h1>
                    <p className="text-xl text-[#344256] dark:text-[#a4afbc]">Find your perfect read in our carefully organized collections</p>
                    <div className=" gap-[30px] pt-[50px] pb-[50px]  grid grid-cols-2  md:grid-cols-3  xl:grid-cols-4 ">{categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(cat)}
                            variant
                            className="hover:scale-105 transition-all duration-300 p-[15px] bg-[#AEC6CF] w-full rounded hover:bg-yellow-400 cursor-pointer flex flex-col items-center lg:p-[15px] dark:bg-[#ebe0f5]"
                        >
                            <span className="dark:text-[#ffff]">{categoryIcons[cat] || <FiBook />}
                            </span>
                            <h1 className="font-semibold text-[#344256] dark:text-[#ffff]">{cat}</h1>
                            <p className="text-sm text-[#344256] dark:text-[#3c4454] ">{categoryCounts[cat]}books</p>

                        </button>
                    ))}</div>
                </div>
                <div className=" py-[50px] px-[20px] md:px-[40px] lg:px-[75px] xl:px-[100px] dark:bg-[#2e3949]">
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold text-[#344256] dark:text-white ">Featured Books</h1>
                            <p className="text-[#344256] dark:text-[#a4afbc]">Hand-picked recommendations from our literary experts</p>
                        </div>
                        <div className="flex justify-self-end mb-5">
                            <label className="text-[#344256]">Sort by</label>
                            <select
                                value={sortOption}
                                className="text-[#344256]"
                                onChange={(e) => setSortOption(e.target.value)}>
                                <option value="">Defult</option>
                                <option value="asc">Price (Low → High)</option>
                                <option value="desc">Price (High → Low)</option>
                            </select>

                        </div>

                    </div>

                    <div className="grid grid-cols-2  md:grid-cols-3  gap-[10px] xl:grid-cols-5  gap-[10px]  ">
                        {sortedBook.map((book) => (
                            <BookCard key={book._id} book={book} />
                        ))}

                    </div>
                </div>
            </div>
            <News />
            <Footer />

        </>

    )
}
export default Home
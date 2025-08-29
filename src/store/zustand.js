import { create } from "zustand";

const useBookStore = create((set)=>({
    searchTerm:"",
    setSearchTerm:(term)=> set({searchTerm:term})
}))



export default useBookStore
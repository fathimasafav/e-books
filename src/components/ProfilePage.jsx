import axios from "axios";
import React, { useEffect, useState } from "react";

const profile=()=>{
    const[user,setUser]=useState("null")

    useEffect(()=> {
        const fetchUser = async()=>{
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get("http://localhost:4000/api/v1/user/me", {
                    headers:{Authorization:`Bear ${token}`}
                });
                setUser(res.data.data)
                setFormData(res.data.data)

            }catch(err){
                console.error(err)
            }
        };
        fetchUser();
    }, [])

}
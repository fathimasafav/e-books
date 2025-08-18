import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState ("")
    const [showPassword, setShowPassword] = useState(false);
    const[confirmPassword,setConfirmPassword]=useState(false);
    const navigate= useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:4000/api/v1/auth/sign-up', {
                method: 'POST',
                headers: { 'content-type': "application/json" },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token",data.data.token);
                navigate("/home");
            } else {
                alert(data.message || "Signup failed")
            }

        } catch (err) {
            console.error(err)
            alert("something went wrong. please try again later")
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eaf0fd]" >
            <div className="bg-white p-8 w-md rounded-2xl shadow-md">
                <div className="flex items-center justify-center">
                    <FiBookOpen className="text-blue-700 text-3xl" />
                </div>
                <h1 className="text-2xl text-center font-bold ">Creat Account</h1>
                <p className="text-[#696969]">Join our digital library community</p>
                <form onSubmit={handleSignUp} className="">
                    <div >
                        <div className="pt-5"> <label >Full Name</label></div>
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />
                       
                    </div>
                    <div>
                        <div className="pt-5"> <label >Email</label></div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />

                    </div>

                    <div>
                        <div className="pt-5"> <label >Password</label></div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />

                    </div>
                    <div>
                        <div className="pt-5"> <label >Confirm Password</label></div>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />
                    </div>
                    <button
                    type="sumit"
                     className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-6">Sign Up</button>
                </form>
                <p className="pt-5 text-[#696969] text-sm font-normal text-center">Already have an account?<Link to="/" className="text-blue-700 font-semibold hover:underline">Login</Link></p>

            </div>
        </div>
    )

}
export default SignUp;
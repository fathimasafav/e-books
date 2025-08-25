import React, { useState } from "react";
import { FiBookOpen } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch('http://localhost:4000/api/v1/auth/sign-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log(data,'u8huhu')
            if (res.ok) {
                localStorage.setItem('token', data.data.token);
localStorage.setItem('userId',data.data.user._id)
                navigate("/home")
            } else {
                alert(data.error || 'Login failed')
            }

        } catch (err) {
            console.error(err)
            alert("something wrong");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#eaf0fd]" >
            <div className="bg-white p-8 max-w-md rounded-2xl shadow-md">
                <div className="flex items-center justify-center">
                    <FiBookOpen className="text-blue-700 text-3xl"  />
                </div>
                <h1 className="text-2xl text-center font-bold  ">Library Login</h1>
                <p className="text-[#696969]">Access to your digital eBook collection</p>
                <form onSubmit={handleLogin}>
                    <div className="">
                        <div className="pt-5"> <label >Email</label></div>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />
                    </div>
                    <div className="">
                        <div className="pt-5"><label>password</label></div>
                        <input
                     
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none  bg-[#eaf0fd]"
                        />
                    </div>
                    <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-6">Login</button>
                </form>
                <div className="text-center">
                    <p className="  pt-5 text-[#696969] text-sm font-normal">don't have an account?{" "} <Link to="/sign-up" className="text-blue-700 font-semibold hover:underline">SignUp</Link></p>
                </div>
                <div className="text-center text-[#696969] text-sm font-normal pt-5 ">
                    <button className="hover:underline">Forgot your password?</button>
                </div>

            </div>

        </div>

    )

}


export default Login;
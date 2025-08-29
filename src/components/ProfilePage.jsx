// import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import Footer from "./Footer";
import Header from "./Header";


const Profile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const [preview, setPreview] = useState(null);
    // const [gender, setGender] = useState("")

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token")
                const res = await fetch("http://localhost:4000/api/v1/user/me/profile", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (!res.ok) throw new Error("failed to fetch user")
                const data = await res.json();

                setUser(data.data);
                setFormData(data.data)

            } catch (err) {
                console.error(err)
            }
        };
        fetchUser();
    }, [])

    // const HandleGender = (e) => {
    //     setGender(e.target.value)
    // }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profilePic: file });
        setPreview(URL.createObjectURL(file))
    }
    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("bio", formData.bio || "");
            data.append("number", formData.number || "");
            data.append("nationality", formData.nationality || "");
            data.append("gender", formData.gender || "");
            data.append("dob", formData.dob || "");




            if (formData.profilePic instanceof File) {
                data.append("profilePic", formData.profilePic)
            }

            const res = await fetch(`http://localhost:4000/api/v1/user/me`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: data,
                }
            )
            if (!res.ok) throw new Error("update failed");
            const result = await res.json()

            setUser(result.data);
            setEditMode(false);
            setPreview(null);

        } catch (err) {
            console.error(err)
        }

    }
    if (!user) return <p>Loading...</p>



    return (
        <div>
            <Header/>
            <div className=" ">
            <div className="bg-[#005f7f] w-full h-full p-[100px] flex justify-center dark:bg-[#2e3949] rounded-2 mb-[50px]" >
                <div className="flex flex-col w-[1000px] h-full bg-white  p-[50px]  rounded-lg shadow-md  dark:bg-[#29313d]">
                    <p className="text-2xl font-bold">Profile</p>
                    <div className=" justify-items-center relative">
                        <img
                            src={preview || `http://localhost:4000${user.profilePic}`}
                            alt="profile"
                            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 "
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="  absolute  cursor-pointer top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 absolute opacity-0 "
                        />
                    </div>
                    <div className="text-center">

                        <div className="mb-5">
                            <p className="font-semibold">{user.name}</p>
                            <p className="font-semibold">{user.email}</p>
                            <p className="font-semibold">{user.bio}</p>

                        </div>
                    </div>


                    <div className="flex w-full gap-[20px] ">
                        <div className="w-[50%]">
                            <div className="flex justify-between">
                                <h3 className="font-bold mb-2">Personal Details</h3>
                                <button onClick={() => setEditMode(!editMode)}>{editMode ? 'Cancel' : <CiEdit />}</button>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700 ">Full Name:</span>
                                {editMode ? (
                                    <input type="text" name="fullName" value={formData.name || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.name}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className=" text-gray-700">Date of Birth:</span>
                                {editMode ? (
                                    <input type="Date" name="date" value={formData.dob || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-medium text-gray-900">{user.dob}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Gender:</span>
                                {editMode ? (
                                    <select name="gender" value={formData.gender || ""} onChange={handleInputChange} className="border p-1 rounded text-right">
                                        <option>Female</option>
                                        <option>Male</option>
                                    </select>
                                ) : (
                                        <span className=" font-normal text-gray-900 ">{user.gender}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Nationality:</span>
                                {editMode ? (
                                    <input type="text" name="nationality" value={formData.nationality || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.nationality}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Phone Number:</span>
                                {editMode ? (
                                    <input type="number" name="number" value={formData.number || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.number}</span>
                                )}
                            </div>

                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Address:</span>
                                {editMode ? (
                                    <input type="text" name="address" value={formData.address || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.address}</span>
                                )}
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Bio:</span>
                                {editMode ? (
                                    <textarea rows="3" name="bio" value={formData.bio || ''} onChange={handleInputChange} className="border p-1 rounded text-right" placeholder="Tell us a little about yourself..." />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.bio}</span>
                                )}
                            </div>


                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Email:</span>
                                {editMode ? (
                                    <input type="text" name="email" value={formData.email || ''} onChange={handleInputChange} className="border p-1 rounded text-right" />
                                ) : (
                                        <span className="font-normal text-gray-900">{user.email}</span>
                                )}
                            </div>
                         

                        </div>
                        <div className="w-[50%]" >
                            <h1 className="font-bold mb-2">Account Details</h1>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700 w-full"> Account Created:</span>
                                <span  className="w-full">{user.createdAt}</span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700 w-full">Account Updated:</span>
                                <span className="w-full">{user.updatedAt}</span>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2 border-gray-200">
                                <span className="font-medium text-gray-700">Language Perfernce:</span>
                                {editMode ? (
                                    <select name="language" value={formData.language || ""} onChange={handleInputChange} className="border p-1 rounded text-right">
                                        <option>English</option>
                                        <option>Malayalam</option>
                                    </select>
                                ) : (
                                        <span className=" font-normal text-gray-900 ">{user.language}</span>
                                )}
                            </div>

                        </div>
                    </div>
                    {
                        editMode && (
                            <div>
                                <button onClick={handleSave}>save change</button>
                            </div>
                        )
                    }

                </div>
                <div>

                </div>
                </div>

            </div >
            <div> <Footer /></div>
        </div>

    )



}

export default Profile;
// import axios from "axios";
import React, { useEffect, useState } from "react";


const Profile = () => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({});
    const [preview, setPreview] = useState(null);

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


    const handleChange = (e) => {
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
        <div className="bg-[#005f7f] w-full h-full p-[100px] flex justify-center" >
            <div className="flex flex-col w-[500px] h-full bg-white  p-[50px]  rounded-lg shadow-md ">
                <p className="text-2xl font-bold">Profile</p>
                <div className=" justify-items-center">
                    <img
                        src={preview || `http://localhost:4000${user.profilePic}`}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover border "
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}

                        className=" cursor-pointer left-[-50px]  bottom-[50px] opacity-0  "
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="font-semibold">{user.email}</p>
                    <p>{user.bio}</p>
                </div>
                {editMode && (
                    <div className="flex flex-col ">
                        <div className="flex flex-col mb-2">
                            <label className="font-semibold ">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="font-semibold " >Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        </div>
                        <div className="flex flex-col mb-2">
                            <label className="font-semibold ">Bio</label>
                        <textarea
                            name="bio"
                            value={formData.bio || ""}
                            onChange={handleChange}
                            placeholder="bio"
                        />
                        </div>
                    </div>
                )}

                <div className=" flex justify-center ">
                    {editMode ? (
                        <div className="flex gap-[5px]">
                            <button onClick={handleSave}>Save</button>
                            <button
                                onClick={() => {
                                    setEditMode(false);
                                    setPreview(null);
                                    setFormData(user)
                                }
                                }
                            >Cancel</button>
                        </div>
                    ) : (
                        <button
                         onClick={() =>setEditMode(true)}
                                className="mt-5 font-bold "
                         > Edit Profile</button>
                    )}
                </div>
            </div>
        </div >
    )



}

export default Profile;
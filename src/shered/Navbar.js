"use client"
import { ImExit } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/asset/JMMedia-logo.jpg"
import { UserAuth } from "@/Provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = UserAuth();
    const [control, setControl] = useState(false);
    return (
        <div className="shadow-xl">
            <nav className="flex justify-between items-center py-1 jm_container">
                <div className="text-4xl">
                    <Link href="/">
                        <Image width={150} height={50} className="w-44" src={logo} alt="" />
                    </Link>
                </div>

                <ul className="flex flex-col lg:flex-row gap-3 lg:gap-x-7">
                    <li>
                        <Link href="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/statistics">
                            Add Post
                        </Link>
                    </li>
                    <li>
                        <Link href="/applied">
                            Applied Jobs
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs">
                            Blog
                        </Link>
                    </li>
                </ul>

                {user ? (
                    <div className="relative">
                        <button onClick={() => setControl(!control)}>
                            <Image
                                width={56}
                                height={56}
                                className="w-14 h-14 rounded-full object-cover border-2"
                                src={user?.photoURL}
                                alt="Profile Image"
                            />
                        </button>
                        <div className={`bg-white absolute hrefp-[65px] right-0 w-60 p-3 rounded-xl shadow-xl border ${
                                control ? "block" : "hidden"
                            }`}
                        >
                            <ul>
                                <li>
                                    <Link href={"/"} className="flex items-center gap-5">
                                        <Image
                                            width={44}
                                            height={44}
                                            className="w-11 h-11 rounded-full object-cover border-2"
                                            src={user?.photoURL}
                                            alt="Profile Image"
                                        />
                                        <span className="text-xl font-medium">
                                            {user?.displayName}
                                        </span>
                                    </Link>
                                </li>
                                <li className="mt-4">
                                    <button
                                        onClick={logOut}
                                        className="flex gap-4 text-xl font-medium items-center"
                                    >
                                        <div className="bg-[#ddd] w-11 h-11 rounded-full flex items-center justify-center ">
                                            <ImExit className="text-2xl" />
                                        </div>
                                        <span>Log Out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link href="/login">
                        <button className="btn bg-[#014A97] text-white mt-10 lg:mt-0">
                            Login
                        </button>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

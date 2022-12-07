import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-b from-orange-600 to-orange-800 text-orange-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl text-white" href={"/"}>HexagonMC</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link href={"/"} className={"hover:text-white"}>Home</Link></li>
                    <li tabIndex={0} className={"hover:text-white"}>
                        <a>
                            Wiki
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </a>
                        <ul className="p-2 bg-orange-700 rounded">
                            <li><Link href={"/wiki/pixelmon"} className={"hover:text-white"}>Pixelmon</Link></li>
                            <li><Link href={"/wiki/skyblock"} className={"hover:text-white"}>Skyblock</Link></li>
                        </ul>
                    </li>
                    <li><Link href={"/launcher"} className={"hover:text-white"}>Launcher</Link></li>
                    <li><Link href={"/vote"} className={"hover:text-white"}>Vote</Link></li>
                    <li><Link href={"/team"} className={"hover:text-white"}>Team</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className={"mr-1 hover:text-white"} href={"https://shop.hexagonmc.eu/"} target={"_blank"}>Shop</Link>
            </div>
        </div>
    )
}
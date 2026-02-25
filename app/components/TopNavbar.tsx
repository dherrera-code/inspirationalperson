"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const TopNavbar = () => {

    const currentPath = usePathname();

    // const isActive = (path) => {
    //     return currentPath === path;
    // }
    //Need to insert logic to implement a hover effect
    // const [currentPage, setCurrentPage] = useState("Home")

    // const onPageChange = () => setCurrentPage(page);

    return (
        <header>
            <Navbar fluid rounded className="h-23 py-6">
                <NavbarBrand className="">
                    <span className="self-center whitespace-nowrap text-[26px] font-title dark:text-white">A Life That Inspired Mine</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink className="md:me-2 font-actor" href="/" active>Home</NavbarLink>
                    <NavbarLink className="md:me-2 font-actor" href="/pages/about/">About</NavbarLink>
                    <NavbarLink className="md:me-2 font-actor" href="/pages/why">Personal Impact</NavbarLink>
                    <NavbarLink className="md:me-2 font-actor" href="/pages/contact">Contact Me</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </header>
    )
}

export default TopNavbar
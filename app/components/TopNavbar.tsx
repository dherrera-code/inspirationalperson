"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";


const TopNavbar = () => {

    //Need to insert logic to implement a hover effectt


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
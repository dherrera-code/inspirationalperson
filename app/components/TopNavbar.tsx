"use client"
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";

const TopNavbar = () => {
    const currentPath = usePathname();
    const pages = [
        { name: "Home", path: "/" },
        { name: "About", path: "/pages/about" },
        { name: "Personal Impact", path: "/pages/why" },
        { name: "Contact Me", path: "/pages/contact" },
    ];

    const isActive = (path: string) => {
        return currentPath === path;
    }

    // console.log(currentPath);

    return (
        <header>
            <Navbar fluid rounded className="py-6">
                <NavbarBrand>
                    <span className="self-center whitespace-nowrap text-[26px] font-title dark:text-white">A Life That Inspired Mine</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    {pages.map((page, index) => (
                        <NavbarLink key={index} className={isActive(page.path) ? 'active md:me-2 font-actor' : "md:me-2 font-actor"} href={page.path} >{page.name}</NavbarLink>
                    ))}
                </NavbarCollapse>
            </Navbar>
        </header>
    )
}

export default TopNavbar
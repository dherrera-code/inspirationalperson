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
    return (
        <header className="text-white">
            <Navbar fluid rounded className="py-6 border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-white">
                <NavbarBrand>
                    <span className="self-center whitespace-nowrap text-[26px] font-title dark:text-white text-white ps-1.5">A Life That Inspired Mine</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    {/* This function didn't map well with mac os :( */}
                    {/* {pages.map((page, index) => (
                        <NavbarLink key={index} className={isActive(page.path) ? 'active md:me-2 font-actor text-[20px]' : "md:me-2 font-actor text-[20px]"} href={page.path} >{page.name}</NavbarLink>
                    ))} */} 
                    <NavbarLink className={isActive("/") ? "active md:me-1.5 font-actor text-[18px]" : "md:me-1.5 font-actor text-[18px] text-gray-400"} href={pages[0].path}>{pages[0].name}</NavbarLink>
                    <NavbarLink  className={isActive("/pages/about") ? "active md:me-1.5 font-actor text-[18px]" : "md:me-1.5 font-actor text-[18px] text-gray-400"} href={pages[1].path}>{pages[1].name}</NavbarLink>
                    <NavbarLink  className={isActive("/pages/why") ? "active md:me-1.5 font-actor text-[18px]" : "md:me-1.5 font-actor text-[18px] text-gray-400"} href={pages[2].path}>{pages[2].name}</NavbarLink>
                    <NavbarLink  className={isActive("/pages/contact") ? "active md:me-1.5 font-actor text-[18px]" : "md:me-1.5 font-actor text-[18px] text-gray-400"} href={pages[3].path}>{pages[3].name}</NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </header>
    )
}

export default TopNavbar
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownFill, RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import styles from "@/styles/Navbar.module.css";
import { usePathname } from "next/navigation";

const links = [
    { label: "Home", link: "/" },
    {
        label: "Projects",
        link: "/projects",
        isDropdown: true,
        dropdownItems: [
            { label: "D ENCLAVE", link: "/" },
            { label: "ALI HEIGHTS", link: "/" },
            { label: "RABI CENTER", link: "/" },
            { label: "RESIDENCY", link: "/" },
            { label: "ICON 1", link: "/" },
        ],
    },
    { label: "Summary", link: "/" },
    { label: "About", link: "/" },
    { label: "Contact", link: "/" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleOffCanvas = () => setOffCanvasOpen(!offCanvasOpen);
    const closeOffCanvas = () => setOffCanvasOpen(false);
    const isActive = (link) => link === pathname;

    const MobileMenu = () => (
        <div className="d-block d-lg-none">
            <button className={styles.navbarToggler} onClick={toggleOffCanvas}>
                {offCanvasOpen ? <IoMdClose className={styles.icon} /> : <RiMenu2Line className={styles.icon} />}
            </button>
            <div className={`${styles.offcanvas} ${offCanvasOpen ? styles.show : ""}`}>
                <ul className="navbar-nav text-center">
                    {links.map((item, idx) => (
                        <li key={idx} className={`nav-item ${item.isDropdown ? 'position-relative' : ''}`}>
                            <Link className={`nav-link ${isActive(item.link) ? 'active' : ''}`} href={item.link} onClick={closeOffCanvas}>
                                {item.label}
                                
                            </Link>
                            {item.isDropdown && (
                                <span onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className={styles.dropdownIcon}>
                                    <RiArrowDropDownFill size={35} />
                                </span>
                            )}
                            {mobileDropdownOpen && item.isDropdown && (
                                <ul className={`${styles.dropdownMenu}`}>
                                    {item.dropdownItems.map((dropdownItem) => (
                                        <li key={dropdownItem.link}>
                                            <Link href={dropdownItem.link} className={styles["dropdown-item"]} onClick={closeOffCanvas}>
                                                {dropdownItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {offCanvasOpen && <div className={styles.backdrop} onClick={closeOffCanvas}></div>}
        </div>
    );

    return (
        <nav className={`px-3 navbar navbar-expand-lg fixed-top ${scrolled ? styles.scrolled : ""}`}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <MobileMenu />
                <Link href="/" className="navbar-brand mx-auto mx-lg-0">
                    <Image src="/logo.png" alt="Logo" width={140} height={25} priority />
                </Link>
                <ul className="navbar-nav d-none d-lg-flex mx-auto">
                    {links.map((item, idx) => (
                        <li key={idx} className={`nav-item  ${item.isDropdown ? 'dropdown' : ''}`}
                            onMouseEnter={() => item.isDropdown && setDropdownOpen(item.link)}
                            onMouseLeave={() => item.isDropdown && setDropdownOpen(null)}>
                            <Link className={`nav-link ${styles.link} ${item.isDropdown &&'dropdown-toggle' } ${isActive(item.link) && 'active'}`} href={item.link}>
                                {item.label}
                            </Link>
                            {item.isDropdown && dropdownOpen === item.link && (
                                <ul className={`${styles.dropdownMenu}`}>
                                    {item.dropdownItems.map((dropdownItem, i) => (
                                        <li key={i}>
                                            <Link href={dropdownItem.link} className={styles["dropdown-item"]}>
                                                {dropdownItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <Link href="/register">
                    <button className={styles["nav-btn"]}><span className="d-none d-md-inline">Get</span> Register</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

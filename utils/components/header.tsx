"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const CustomNavbar = () => {
    const [active, setActive] = useState("Home");
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // State for navbar toggle
    const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdowns

    // Load dark mode preference from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");
        if (savedTheme === "true") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark-mode");
        }
    }, []);


    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    const handleMouseEnter = (menu) => {
        setDropdownOpen(menu);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(null);
    };

    return (
        <div className="navbar navbar-expand-lg navbar-light fixed-top p-0 m-0 nav-div mt-4 mx-5 rounded-5">
            <div className="container-fluid pb-2 px-lg-5 px-md-5 footer-color">
                <div className="navbar-brand navbar-light footer-color p-1 m-0">
                    <Image width={130} height={50} src="/icons-footer/immverse-logo.svg" alt="logo" />
                </div>

                <div className="order-lg-2 download-app-btn">
                    <Link className="no-underline d-none d-md-block" target="_blank" href="https://play.google.com/store/search?q=immverseai&c=apps&hl=en" passHref>
                        <Button className="explore-btn-h rounded-5 border-0 px-3">
                            Download our Apps
                            <Image
                                src="/icons-footer/download-arraoow.svg"
                                width={20}
                                height={17}
                                alt="Arrow Right"
                                className="ms-1 t"
                            />
                        </Button>
                    </Link>
                </div>

                <div className="d-flex gap-4">
                    <div className="collapse navbar-collapse text-white justify-content-center d-none d-lg-flex gap-3">
                        <Link className="text-decoration-none  text-white" target="_blank" href="#home" >Home</Link>
                        <Link className="text-decoration-none   text-white" target="_blank" href="https://immverse.ai/about" >About</Link>
                        
                        <div className="position-relative" onMouseEnter={() => handleMouseEnter("product")} onMouseLeave={handleMouseLeave}>
                            <div className="animated-text-banner h-masterClass">Our Product ▾</div>
                            {dropdownOpen === "product" && (
                                <div className="position-absolute  shadow-lg p-2 px-3 rounded nav-div-d">
                                    <Link className="dropdown-item text-decoration-none " target="_blank" href="https://edu.immverse.ai/" >LMS</Link>
                                    <Link className="dropdown-item" target="_blank" href="https://bharatiyagpt.ai/"> Bharatiya GPT </Link>
                                    <Link className="dropdown-item" target="_blank" href="https://beta.immverse.ai/auth/login">  Interact with Avatar</Link>
                                </div>
                            )}
                        </div>

                        <div className="position-relative" onMouseEnter={() => handleMouseEnter("resources")} onMouseLeave={handleMouseLeave}>
                            <div className="h-masterClass">Resources ▾</div>
                            {dropdownOpen === "resources" && (
                                <div className="position-absolute  shadow-lg p-2 px-3 rounded nav-div-d">
                                    <Link className="dropdown-item" target="_blank" href="https://immverse.ai/support-center">  Support Centre</Link>
                                    <Link className="dropdown-item" target="_blank" href="https://immverse.ai/awards-and-recognition">Awards and Recognition</Link>
                                    <Link className="dropdown-item" target="_blank" href="https://immverse.ai/blog"> Blogs</Link>
                                    <Link className="dropdown-item" target="_blank" href="https://immverse.ai/customer-stories">Customer Stories</Link>
                                </div>
                            )}
                        </div>
                        
                        
                        
                        <Link className="text-decoration-none  text-white" target="_blank" href="https://immverse.ai/careers" >Careers</Link>
                        <Link className="text-decoration-none  text-white" target="_blank" href="https://immverse.ai/contact-us" >Contact Us</Link>
                    </div>
                    
                    <button className="navbar-toggler" type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>

            {isNavOpen && (
                <div className="d-flex flex-column ps-4 align-items-start w-100 shadow-lg py-3 gap-3 d-lg-none nav-item-color">
                    <div className="animated-text-banner h-masterClass">Home</div>
                    <div className="h-masterClass">About</div>
                    <div className="animated-text-banner h-masterClass" onClick={() => toggleDropdown("product")}>Our Product ▾</div>
                    {dropdownOpen === "product" && (
                        <div className="ps-3">
                            <div className="dropdown-item">Product 1</div>
                            <div className="dropdown-item">Product 2</div>
                            <div className="dropdown-item">Product 2</div>
                        </div>
                    )}
                    <div className="h-masterClass" onClick={() => toggleDropdown("resources")}>Resources ▾</div>
                    {dropdownOpen === "resources" && (
                        <div className="ps-3">
                            <div className="dropdown-item">Resource 1</div>
                            <div className="dropdown-item">Resource 2</div>
                            <div className="dropdown-item">Resource 1</div>
                            <div className="dropdown-item">Resource 2</div>
                        </div>
                    )}
                    <div className="animated-text-banner h-masterClass">Careers</div>
                    <div className="animated-text-banner h-masterClass">Contact Us</div>
                    <Button className="explore-btn rounded-5 border-0">
                        Download our Apps
                        <Image
                            src="/icons-footer/download-arraoow.svg"
                            width={20}
                            height={17}
                            alt="Arrow Right"
                            className="ms-1"
                        />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CustomNavbar;

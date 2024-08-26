import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import './Header.css';
import { BsBag } from "react-icons/bs";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    // event listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <>
            <h1 className="center">Welcome to Online store</h1>
            <header className={`header ${isActive ? "header--active" : ""}`}>

                <div className="header__container">


                    {/* Cart Icon */}
                    <div onClick={() => setIsOpen(!isOpen)} className="header__cart">
                        <BsBag className="header__cart-icon" />
                        <div className="header__cart-count">
                            {itemAmount}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

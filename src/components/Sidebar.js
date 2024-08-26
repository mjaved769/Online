import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);

    return (
        <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <div className="sidebar-header">
                <div className="sidebar-title">Shopping Bag ({itemAmount})</div>
                <div
                    onClick={handleClose}
                    className="sidebar-close"
                >
                    <IoMdArrowForward className="sidebar-close-icon" />
                </div>
            </div>
            <div className="sidebar-content">
                {cart.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
            <div className="sidebar-footer">
                <div className="sidebar-total">
                    <span className="sidebar-total-label">Subtotal:</span>
                    ${parseFloat(total).toFixed(2)}
                </div>
                <div
                    onClick={clearCart}
                    className="sidebar-clear-cart"
                >
                    <FiTrash2 />
                </div>
                <Link
                    to={"/"}
                    className="sidebar-view-cart"
                >
                    View Cart
                </Link>
                <Link
                    to={"/"}
                    className="sidebar-checkout"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;

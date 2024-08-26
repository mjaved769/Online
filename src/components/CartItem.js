import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import "./CartItem.css"; // Import the CSS file

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    const { id, title, image, price, amount } = item;

    return (
        <div className="cart-item">
            <div className="cart-item-content">
                <Link to={`/product/${id}`}>
                    <img className="cart-item-image" src={image} alt={title} />
                </Link>
                <div className="w-full flex flex-col">
                    <div className="cart-item-header">
                        <Link to={`/product/${id}`} className="cart-item-title">
                            {title}
                        </Link>
                        <div onClick={() => removeFromCart(id)} className="cart-item-remove-icon">
                            <IoMdClose />
                        </div>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-quantity">
                            <div onClick={() => decreaseAmount(id)} className="cart-item-quantity-button">
                                <IoMdRemove />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            <div onClick={() => increaseAmount(id)} className="cart-item-quantity-button">
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className="cart-item-price">
                            $ {price}
                        </div>
                        <div className="cart-item-final-price">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

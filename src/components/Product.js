import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import './Product.css'; // Import the CSS file

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    // destructure product
    const { id, image, category, title, price } = product;

    return (
        <div className="product">
            <div className="product-image-container">
                <div className="product-image">
                    <img
                        className="product-image-img"
                        src={image}
                        alt={title}
                    />
                </div>
                {/* buttons */}
                <div className="product-buttons">
                    <button onClick={() => addToCart(product, id)} className="product-button-add">
                        <div className="product-button-icon">
                            <BsPlus className="product-icon" />
                        </div>
                    </button>
                    <Link
                        to={`/product/${id}`}
                        className="product-button-view"
                    >
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            {/* category, title & price */}
            <div className="product-info">
                <div className="product-category">{category}</div>
                <Link to={`/product/${id}`} className="product-title-link">
                    <h2 className="product-title">{title}</h2>
                </Link>
                <h2 className="product-price">$ {price}</h2>
            </div>
        </div>
    );
};

export default Product;

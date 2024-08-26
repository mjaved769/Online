import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';
import './Home.css'; // Import the CSS file

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    console.log(products);

    // get only men's and women's clothing category
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
        );
    });

    return (
        <div className="Home">
            <section className="products-section">
                <div className="container">
                    <h1 className="title">Explore Our Products</h1>
                    <div className="products-grid">
                        {filteredProducts.map((product) => {
                            return (
                                <Product product={product} key={product.id} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

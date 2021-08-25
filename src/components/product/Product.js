import React from 'react';
import { UseStateValue } from '../../stateprovider/Stateprovider';
import './Product.css';
const product = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=UseStateValue();
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
            id,
            title,
            image,
            price,
            rating,

         },
        });
    };
    return (
        
                <div className="product">
                    <div className="product_info">
                        <p>{title}</p>
                        <p className="product_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                        </p>
                        <div className="product_rating">
                            {Array(rating).fill().map((_)=>(
                                <span role="img" aria-label="rating"> ⭐</span>
                            ))}
                        </div>
                    </div>
                    <img src={image} alt="" />
                    <button onClick={addToBasket} >Add to basket</button>
                </div>
        
    );
};

export default product;

import React from 'react';
import Checkoutproduct from '../../components/Checkoutproduct/Checkoutproduct';
import { UseStateValue } from '../../stateprovider/Stateprovider';
import './Checkout.css';

const Checkout = () => {
    const[{basket}]= UseStateValue();
    return (
        <div className="checkout">
        <div>
            <img className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="logo" />
          {basket.length === 0 ?(
              <div>
                  <h2>your basket is empty</h2>
                  <p>add items to basket</p>
              </div>
          ) : (
              <div>
                  <h2 className="checkout__title " >items is basket</h2>
                  {basket.map((item)=>(
                       <Checkoutproduct 
                       key={item.id} 
                       id={item.id}
                        image={item.image} 
                        title={item.title} 
                        price={item.price} 
                        rating={item.rating} 
                        /> 
                  ))}
              </div>
          )}
        </div>
        {basket.length > 0 && (
            <div>
                <h2>total</h2>
            </div>
        )}
        </div>
    );
};

export default Checkout;;

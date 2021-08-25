import React from 'react';
import{Search, ShoppingBasket} from '@material-ui/icons';
import './Header.css';
import {Link} from 'react-router-dom';
import { UseStateValue } from '../../stateprovider/Stateprovider';
import { auth } from '../../firebase';

const Header = () => {
    const[{basket,user}]=UseStateValue();
    const login =() =>{
        if(user){
            auth.signOut();
        }
    };
    return (
        <nav className="header">
            <Link to="/" >
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"  alt="logo"/>
            </Link>
            <div className="header_search">             
                <input type="text" className="header_input"/>
                <Search className="header_searchicon" />
            </div>
            <div className="header_nav">
            <Link to={!user && "/login"} className="header_link">
                <div className="header_option" onClick={login}>
                    <span className="header_one">hello {user?.email}</span>
                    <span className="header_two">{user? "Sign Out":"Sign In"}</span>
                </div>
                </Link>
                <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_one">Return</span>
                    <span className="header_two"> orders</span>
                </div>
                </Link>
                <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_one">your</span>
                    <span className="header_two">prime</span>
                </div>
                </Link>
                <Link to="/checkout" className="header_link">
                <div className="header_basket">
                    <ShoppingBasket />
                    <span className="header_count">{basket.length}</span>
                </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;

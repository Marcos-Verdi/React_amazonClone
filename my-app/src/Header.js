import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link } from 'react-router-dom';
import './style.css';
import { useStateValue } from './StateProvider';

export default function Header() {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/" className="nav-logo-container">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon-logo"
                    className="nav-logo" />
            </Link>
            
            <div className="nav-search">
                <input
                    className="nav-search-input"
                    type="text" 
                    placeholder="Search item..."></input>
                <div className="nav-search-logo">
                    <SearchIcon 
                    className='search-logo'
                    style={{ color: "black",
                            backgroundColor: "orange"}}/>
                </div>
            </div>
            <div className="nav-links">

                <div className="nav-link-signin">
                    <span className="link-lineOne">Hello</span>
                    <span className="link-lineTwo">Sign in</span>
                </div>

                <div className="nav-link-orders">
                    <span className="link-lineOne">Returns</span>
                    <span className="link-lineTwo">& Orders</span>
                </div>

                <div className="nav-link-cart">
                    <span className="link-lineOne">Your</span>
                    <span className="link-lineTwo">Prime</span>
                </div> 

                <Link to='/checkout'>
                    <div className="nav-link-cartImg">
                        <BusinessCenterIcon 
                            style={{ color: "white" }}/>
                        <span className='nav-cart-counter'>{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}
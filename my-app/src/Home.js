import React from 'react'
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home-container">

                <div className="home--row">
                    <Product
                        id='12345' 
                        info='The Lean Startup: One of the best entrepreneurial books'
                        price={19.99}
                        rating={4}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product
                        id='36759'
                        info='Freakonomics: A book about the hidden side of everything'
                        price={24.99}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                </div>

                <div className="home--row">
                    <Product
                        id='93767'
                        info='Freakonomics: A book about the hidden side of everything'
                        price={30.99}
                        rating={3}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product
                        id='58209' 
                        info='Freakonomics: A book about the hidden side of everything'
                        price={24.99}
                        rating={4}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                    <Product
                        id='92345' 
                        info='Freakonomics: A book about the hidden side of everything'
                        price={24.99}
                        rating={5}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                </div>
                
                <div className="home--row">
                    <Product
                        id='97675' 
                        info='Freakonomics: A book about the hidden side of everything'
                        price={24.99}
                        rating={3}
                        img="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"/>
                </div>

            </div>
        </div>
    )
}
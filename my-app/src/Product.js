import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useStateValue } from './StateProvider';

export default function Product({ id, info, price, rating, img }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        console.log(basket.length);
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                info: info,
                price: price,
                rating: rating,
                img: img,
            },
        });
    };

    return (
        <div className="product" key={id}>

            <div className="product-info">
                <p>
                    {info}
                </p>
                <p className="product-price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map( (_,i) => (
                        <p><StarBorderIcon className="product-star" /></p>
                    ))}
                </div>
                <img src={img} alt="none"/>
                <button 
                    className="product-button"
                    onClick={addToBasket}>
                    Add to basket
                </button>
            </div>

        </div>
    )
}
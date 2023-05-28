import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './style.css';
import { useStateValue } from './StateProvider';

function BasketItem({ id, info, price, rating, img }) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
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
    <div className='checkout-item' key={id}>

        <img 
            className='checkout-item--img'
            alt='product-img'
            src={img}/>
        <div className='checkout-item--info'>
            <p>{info}</p>
            <p>$<span>{price}</span></p>
            <p className='checkout-item--star-container'>
              {Array(rating).fill().map( (_,i) => (
                        <p><StarBorderIcon className="product-star" /></p>
                    ))}
            </p>
            <button 
              className='checkout-item--button'
              onClick={removeFromBasket}>
              Remove from basket
            </button>
        </div>

    </div>
  )
}

export default BasketItem

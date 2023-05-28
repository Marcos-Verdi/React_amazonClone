import React from 'react'
import BasketItem from './BasketItem'
import BasketSummary from './BasketSummary'
import { useStateValue } from './StateProvider'
import './style.css'

export default function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>

            <div className='checkout-container'>
                
                <div className='checkout-basket'>
                    <h3 className='checkout-title'>Your Shopping Basket</h3>
                    <div className='checkout-items'>
                        {basket.map(item => (
                            <BasketItem
                                key={item.id} 
                                id={item.id}
                                info={item.info}
                                price={item.price}
                                rating={item.rating}
                                img={item.img}/>
                        ))}   
                    </div>
                </div>

                <div className='checkout-summary'>
                    <BasketSummary />
                </div>

            </div>

        </div>
    )
}
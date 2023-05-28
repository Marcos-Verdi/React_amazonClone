import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import './style.css';

function BasketSummary() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /><span>This order contains a gift</span><br/>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className='checkout-summary--button'>Proceed to Checkout</button>
    </div>
  )
}

export default BasketSummary;
    
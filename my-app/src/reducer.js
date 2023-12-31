export const initialState = {
    basket: [],

};

export const getBasketTotal = (bkt) => 
    bkt.reduce( (accumulator, item) => accumulator + item.price, 0);


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (item) => item.id === action.item.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index,1);
            } else {
                console.warn(
                    `can't remove product (id: ${action.id}) as
                    it does not exist in the market`
                )
            }

            return {
                ...state,
                basket: newBasket
            };

        default:
            return state;
    }
}

export default reducer
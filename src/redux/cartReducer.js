// set initial state
const initialState = {
    cartItems : []
}

// declare cart reducer
export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADDTOCART': return {
            ...state,
            cartItems : [...state.cartItems,action.payload]
        }
        case 'REMOVEFROMCART' : return {
            ...state,
            cartItems : state.cartItems.filter(obj=>obj.id!== action.payload.id)
        }
        default : return state
    }
}
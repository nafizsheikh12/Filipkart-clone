import axios from 'axios'
import * as action from '../constants/cartConstant'


const url = 'http://localhost:8000'

export const addToCart = (id) => async (dispatch)=> {
    try {
     const {data} = await  axios.get(`${url}/saman/${id}`)

     dispatch({type: action.ADD_TO_CART,payload: data})
    }catch(err){
        console.log(err)
    }
}


export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id);
    dispatch({
        type: action.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {makeStyles} from '@mui/styles'
import EmptyCart from './EmptyCart';
import { Box, Typography, Button, Grid } from '@mui/material';
import CartItem from './CartItem';
import TotalView from './TotalView';
import { addToCart, removeFromCart } from '../../redux/action/cartAction';

const useStyle = makeStyles({
    component: {
        // marginTop: 55,
        padding: '30px 135px',
        display: 'flex',
       
            padding: '15px 0'
        
    },
    leftComponent: {
        // width: '67%',
        paddingRight: 15,
      
            marginBottom: 15
     
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    bottom: {
        padding: '16px 22px',
        background: '#fff',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        borderTop: '1px solid #f0f0f0'
    },
    placeOrder: {
        display: 'flex',
        marginLeft: 'auto',
        background: '#fb641b',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        height: 51
    }
});


const Cart = () => {
    const classes = useStyle();
    const dispatch = useDispatch();

    const {cartItems} = useSelector(state => state.cart);

    useEffect(() => {
       console.log('h')
    }, [])

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

   
    return (
        <Box>
          { cartItems.length ? 
            <Grid container className={classes.component}>
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
                    </Box>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <Box className={classes.bottom}>
                        <Button variant="contained" className={classes.placeOrder}>Place Order</Button>
                    </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems} />
                </Grid>
            </Grid> : <EmptyCart />
          
          } 
            
        </Box>
    )
}

export default Cart

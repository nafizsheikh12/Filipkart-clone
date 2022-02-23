import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useHistory } from 'react-router-dom';

import {makeStyles} from '@mui/styles'
import {addToCart} from '../../redux/action/cartAction'
import { useSelector, useDispatch } from 'react-redux';




const useStyle = makeStyles({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
       
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
});

const ActionItem = ({ product }) => {
    const classes = useStyle();
    const dispatch = useDispatch();
     const history = useHistory()

    const addCart = () =>  {
        dispatch(addToCart(product.id))
        history.push('/cart')
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.productImage} /><br />
            <Button onClick={() => addCart()} className={(classes.button, classes.addToCart)} style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
            <Button  variant="contained"><Flash /> Buy Now</Button>
        </Box>
    )
}

export default ActionItem;
import React,{useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'

//component
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSection from './MidSection'

//import {products} from '../../constant/data'
import {getProducts as listProducts} from '../../redux/action/productAction'

const useStyle = makeStyles({
   component: {
       padding: 10,
       background: '#F2F2F2'
   },
   rightWrapper: {
    marginTop: 12,
    background: '#FFFFFF',
    width: '17%',
    marginLeft: 10,
    padding: 5,
    
}
})

const Home = () => {
    const classes = useStyle()
    const addUrl = "https://media.designrush.com/tinymce_images/125949/conversions/best-marketing-campaigns-Roladin-content.jpg";

    
    const getProducts = useSelector(state => state.getProducts);
    const { products, error } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <NavBar/>
           <Box className={classes.component}>
              <Banner/>
               <Box style={{display: 'flex'}}>
                   <Box style={{width: '80%'}}>
                        <Slide
                            timer={true}
                            title="Deal of the Day"
                            products={products}
                        />
                   </Box>
                   <Box className={classes.rightWrapper}>
                       <img src={addUrl} style={{width: 250,height:'auto'}}/>
                   </Box>
               </Box>
               <MidSection/>
           </Box> 
           
        </div>
    )
}

export default Home

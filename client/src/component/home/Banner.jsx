import Carousel from 'react-material-ui-carousel'
import React from 'react'
import {bannerData} from '../../constant/data'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 280
    }
})

const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel
        >
            {
                bannerData.map( (image) => <img src={image}  className={classes.image}/> )
            }
        </Carousel>
    )
}

export default Banner

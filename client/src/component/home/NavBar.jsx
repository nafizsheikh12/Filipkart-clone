import React from 'react'
import {Box, Typography} from '@mui/material';
import {navData} from '../../constant/data'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    component: {
       display: 'flex',
       justifyContent: 'space-between',
       margin: '55px 130px 0 130px'
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64
    }
})

const NavBar = () => {
    const classes = useStyle()
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                    <img src={data.url} className={classes.image}/>
                    <Typography>{data.text}</Typography>
                    </Box>
                ))
            }
            
        </Box>
    )
}

export default NavBar

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
//import {products} from '../../constant/data'
import {makeStyles} from '@mui/styles'
import { Box, Typography, Button, Divider } from '@mui/material';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'

const useStyle = makeStyles({
component: {
    marginTop: 12,
    background: '#fff'
}, 
timer: {
    color: '#7f7f7f',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center'
},
image: {
    width: 'auto',
    height: 150
},
text: {
    fontSize: 14,
    marginTop: 5
},
deal: {
    display: 'flex',
    padding: '15px 20px'
},
dealtext: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 25
},
button: {
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: 2,
    fontSize: 13
},
wrapper: {
    padding: '25px 15px'
}

})

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Slide = ({timer,products}) => {
    const classes = useStyle();
    const timerUrl = 'https://cdn1.iconfinder.com/data/icons/credit-card-payments-3/65/57-512.png'

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };
    return (
       <Box className={classes.component}>
         <Box className={classes.deal}>
            <Typography className={classes.dealtext}>Deal of the day</Typography>
          {  
            timer && 
             <>
             <img src={timerUrl} style={{ width: 24 }}/>
             <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
             <Button variant="contained" color="primary" className={classes.button}>View All</Button>
            </> 
          }  
         </Box>
         <Divider />
        <Carousel responsive={responsive}
           autoPlay={true}
        >
           {
               products.map(val => (
                 <Link to={`saman/${val.id}`}>
                 <Box textAlign='center' className={classes.wrapper}>
                   <img src={val.url} className={classes.image}/>
                   <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{val.title.shortTitle}</Typography>
                   <Typography className={classes.text} style={{ color: 'green' }}>{val.discount}</Typography>
                   <Typography className={classes.text} style={{ color: '#212121', opacity: '.6' }}>{val.tagline}</Typography>
                  </Box>  
                 </Link> 
               ))
           }
        </Carousel>
       </Box> 
    )
}

export default Slide

import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards1.module.css';

const Cards1 = ({data: { confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed){
        return 'loading...';
    }
    const alt = [{...confirmed, title:'confirmed'},{...recovered, title:'recovered'}, {...deaths, title:'deaths'}];
    
    return(
        <div className={styles.container}>
          {alt.map((item,i) =>(
            <Grid container spacing={3} justify = "center"  key= {i}>
                <Grid item component= {Card} xs={12} md={3}  className={ cx(styles.card, styles.infected)}>
                  <CardContent>
                    <Typography color= "textSecondary" gutterBottom>{item.title}</Typography>
                    <Typography variant="h5" key= {"typo-2"+1}>
                         <CountUp start={0} end={item.value} duration= {2.5} separator=","/>
                    </Typography>
                     <Typography color= "textSecondary"  key= {"typo-3"+1}>{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography variant="body2"  key= {"typo-4"+1}>Number of active cases of Covid-19</Typography>
                  </CardContent>
                </Grid>
             </Grid>
          ))} 
        </div>
      
    )
} 

export default Cards1;
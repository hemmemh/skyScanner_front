'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { IoAirplaneSharp } from "react-icons/io5";
import { Button, IconButton } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FlightData } from '@/components/shared/ui/flightData';
import { ITrip } from '@/components/shared/api/trip';

interface FlightCard {
  data:ITrip
}
export const FlightCard:FC<FlightCard> = ({data}) => {
  return (
     <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.infos}>
          <div className={styles.info}>
         
         <div className={styles.info__company}>{data.company.name}</div>
         <FlightData data={data}/>

     
          </div> 
          <div className={styles.info}>
         
         <div className={styles.info__company}>{data.company.name}</div>
         <FlightData data={data}/>

     
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actions__body}>
            <div className={styles.actions__price}>320$</div>
             <Button variant="contained" endIcon={<FaArrowRightLong/>}>Select</Button>
          </div>
          <div className={styles.actions__favorite}>
          <IconButton aria-label="delete">
          <MdFavoriteBorder />
           </IconButton>
          
          </div>
        </div>
      </div>
     </div>
  )
}

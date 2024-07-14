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
import { isTripsPairs } from '@/components/shared/quards/guards';

interface FlightCard {
  data:[ITrip, ITrip] | ITrip
}

const Infos:FC<FlightCard> = ({data})=>{
  if (isTripsPairs(data)) {
    return (
      <>
      <div className={styles.info}>
 
 <div className={styles.info__company}>{data[0].company.name}</div>
 <FlightData data={data[0]}/>


  </div> 
  <div className={styles.info}>
 
 <div className={styles.info__company}>{data[1].company.name}</div>
 <FlightData data={data[1]}/>


  </div>
</>
    )
  }else{
    return (
      <div className={styles.info}>
         
      <div className={styles.info__company}>{data.company.name}</div>
      <FlightData data={data}/>
       </div> 
    )
  }

}

const Price:FC<FlightCard>= ({data})=>{
  if (isTripsPairs(data)) {
    return   <div className={styles.actions__price}>{data[0].price + data[1].price}₽</div>
  }else{
    return   <div className={styles.actions__price}>{data.price + data.price}₽</div>
  }
}

export const FlightCard:FC<FlightCard> = ({data}) => {

 
  return (
     <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.infos}>
          <Infos data={data}/>
        </div>

        <div className={styles.actions}>
          <div className={styles.actions__body}>
             <Price data={data}/>
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

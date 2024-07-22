'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { IoAirplaneSharp } from "react-icons/io5";
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";

import { MdFavoriteBorder } from "react-icons/md";
import { FlightData } from '@/components/shared/ui/flightData';
import { FlightVertData } from '@/components/shared/ui/flightVertData';
import { IoIosArrowDown } from 'react-icons/io';
import { ITrip } from '@/components/shared/api/trip';
import { isTripsPairs } from '@/components/shared/quards/guards';



interface FlightBigCard {
  data:[ITrip[], ITrip[]] | ITrip[]
}

const Infos:FC<FlightBigCard> = ({data})=>{
  console.log('data', data);
  
  if (isTripsPairs(data)) {
    return (
      <>
      <div className={styles.info}>
 
 <div className={styles.info__company}>{data[0][0].company.name}</div>
 <FlightData data={data[0]}/>


  </div> 
  <div className={styles.info}>
 
 <div className={styles.info__company}>{data[1][0].company.name}</div>
 <FlightData data={data[1]}/>


  </div>
</>
    )
  }else{
    return (
      <div className={styles.info}>
         
      <div className={styles.info__company}>{data[0].company.name}</div>
      <FlightData data={data}/>
       </div> 
    )
  }

}




export const FlightBigCard:FC<FlightBigCard> = ({data}) => {
  return (
     <div className={styles.main}>
      <div className={styles.body}>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className={styles.head}>
          <Infos data={data}/>
          </div>

        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.bort}>Lufthansa LH135</div>
          <FlightVertData/>
          <div className={styles.infos}>
          <div className={styles.info}>Arrives: Tue, 9 Jul 2024</div>
          <span className={styles.span}></span>
          <div className={styles.info}>Journey duration: 0h 50</div>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>
     </div>
  )
}

'use client'

import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { Title } from '@/components/shared/ui/title';
import { Button, IconButton } from '@mui/material';
import { FlightBigCard } from '@/components/entities/flightBigCard';
import { Add } from '@/components/shared/ui/add';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchTrips, selectTrips } from '@/components/entities/Trip';
export const Details = () => {

  const useDispatch = useAppDispatch()

  const searchParams = useSearchParams()
  const params =  useParams<{depart:string, return?:string}>()




  const trips = useAppSelector(selectTrips)

  useEffect(() => {
    const query:any = {} 
    for (const [key, value] of searchParams.entries()) {
     query[key] = value
     console.log(`${key}, ${value}`, searchParams.entries());
   }
   
   
   useDispatch(fetchTrips({params}))
  }, [])
  


  
  return (
    <div className={styles.main}>
        <div className='container'>
            <div className={styles.body}>
              <Title className={styles.titleColor} size='medium'>Flight details</Title>
              <div className={styles.infos}>
                <div className={styles.flightInfos}>
                <div className={styles.data}>
                <div className={styles.info}>
                    <div className={styles.info__title}>Outbound Tue, 9 Jul 2024</div>
                    {trips &&  <FlightBigCard data={trips}/>}
                   
                </div>
                <div className={styles.info}>
                    <div className={styles.info__title}>Return Tue, 16 Jul 2024</div>
                    {trips && <FlightBigCard data={trips}/>}
                    
                </div>
                </div>

                <div className={styles.pay}>
                <Button variant="contained" >Оплатить</Button>
              </div>
                </div>
                <div className={styles.add}>
                    <Add/>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';
import { ITrip } from '../../api/trip';
import dayjs from 'dayjs';
import { sliceCity } from '../../lib/flight';
interface FlightData {
  data:ITrip
}

export const FlightData:FC<FlightData> = ({data}) => {
  console.log('data', data);
  

  const start = dayjs(data.departure_time).format('HH:MM')
  const end = dayjs(data.arrival_time).format('HH:MM')

  const diffTime = dayjs(data.arrival_time).diff(dayjs(data.departure_time)) 

  const hours = dayjs(diffTime).hour()
  const minutes = dayjs(diffTime).minute()


  return (
    <div className={styles.dataFlight}>
   
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>{start}</div>
      <div className={styles.dataFlight__place}>{sliceCity(data.departure_city.name)}</div>
    </div>
    <div className={styles.dataFlight__direction}>
       <div className={styles.dataFlight__hours}>{hours}h{minutes}</div>
       <div className={styles.dataFlight__icon}>
      <span></span>
      <IoAirplaneSharp color='#626971' />
       </div>
       <div className={styles.dataFlight__direct}>direct</div>
    </div>
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>{end}</div>
      <div className={styles.dataFlight__place}>{sliceCity(data.arrival_city.name)}</div>
    </div>
</div>
  )
}

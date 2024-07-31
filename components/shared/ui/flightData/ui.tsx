'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';
import { ITrip } from '../../api/trip';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);
import { msToHoursAndMinutes, sliceCity } from '../../lib/flight';
interface FlightData {
  data:ITrip[]
}

export const FlightData:FC<FlightData> = ({data}) => {


  const {start, end,hours,minutes} = msToHoursAndMinutes(+data[0].departure_time,+data[data.length - 1 ].arrival_time)

 console.log('data0', data[0]);
 



  return (
    <div className={styles.dataFlight}>
   
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>{start}</div>
      <div className={styles.dataFlight__place}>{sliceCity(data[0].departure_city.name)}</div>
    </div>
    <div className={styles.dataFlight__direction}>
       <div className={styles.dataFlight__hours}>{hours}h{minutes}</div>
       <div className={styles.dataFlight__hours}>{data.length}</div>
       <div className={styles.dataFlight__icon}>
      <span></span>
      <IoAirplaneSharp color='#626971' />
       </div>
       <div className={styles.dataFlight__direct}>direct</div>
    </div>
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>{end}</div>
      <div className={styles.dataFlight__place}>{sliceCity(data[data.length - 1].arrival_city.name)}</div>
    </div>
</div>
  )
}

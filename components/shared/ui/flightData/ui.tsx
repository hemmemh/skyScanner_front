'use client'
import React, { FC } from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';
import { ITrip } from '../../api/trip';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration);
import { sliceCity } from '../../lib/flight';
interface FlightData {
  data:ITrip[]
}

export const FlightData:FC<FlightData> = ({data}) => {
  const lastIndex = data.length - 1 
  const start = dayjs(+data[0].departure_time).format('HH:mm')
  const end = dayjs(+data[lastIndex].arrival_time).format('HH:mm')
  const hours = dayjs.duration(+data[lastIndex].arrival_time - +data[0].departure_time ).asHours().toFixed()
  const minutes = dayjs.duration(+data[lastIndex].arrival_time - (+data[0].departure_time + +hours * 3600000)).asMinutes().toFixed() 



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
      <div className={styles.dataFlight__place}>{sliceCity(data[lastIndex].arrival_city.name)}</div>
    </div>
</div>
  )
}

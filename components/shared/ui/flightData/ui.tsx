
import React from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';

export const FlightData = () => {
  return (
    <div className={styles.dataFlight}>
   
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>10:45</div>
      <div className={styles.dataFlight__place}>BER</div>
    </div>
    <div className={styles.dataFlight__direction}>
       <div className={styles.dataFlight__hours}>1h10</div>
       <div className={styles.dataFlight__icon}>
      <span></span>
      <IoAirplaneSharp color='#626971' />
       </div>
       <div className={styles.dataFlight__direct}>direct</div>
    </div>
    <div className={styles.dataFlight__location}>
      <div className={styles.dataFlight__time}>10:45</div>
      <div className={styles.dataFlight__place}>BER</div>
    </div>
</div>
  )
}

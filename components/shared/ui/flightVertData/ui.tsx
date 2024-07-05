
import React from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';

export const FlightVertData = () => {
  return (
    <div className={styles.body}>
      <div className={styles.hours}>0h 50</div>
      <div className={styles.info}>
        <span className={styles.span}></span>
        <div className={styles.data}>15:50 STR Stuttgart</div>
        <div className={styles.data}>15:50 FRA Frankfurt am Main</div>
      </div>

    </div>
  )
}

import { FlightCard } from '@/components/entities/flightCard'
import { FlightsFilter } from '@/components/features/flightsFilter/ui'
import { FlightsSort } from '@/components/features/flightsSort'
import React from 'react'
import styles from './styles.module.scss';
export const FlightsBody = () => {
  return (

          <div className={styles.body}>
    <FlightsSort/>
    <FlightCard/>
    </div>



  )
}

'use client'
import { FlightCard } from '@/components/entities/flightCard'
import { FlightsFilter } from '@/components/features/flightsFilter/ui'
import { FlightsSort } from '@/components/features/flightsSort'
import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { fetchTripList, selectTripList } from '@/components/entities/TripList';
export const FlightsBody = () => {

  const useDispatch = useAppDispatch()

  const tripList = useAppSelector(selectTripList)


  useEffect(() => {
        
    useDispatch(fetchTripList())
    return () => {
    
    }
  }, [])


  return (


    
          <div className={styles.body}>
    <FlightsSort/>
    {tripList && tripList.map(el=>
    <FlightCard key={el.uid}  data={el}/>
    )}

    </div>



  )
}

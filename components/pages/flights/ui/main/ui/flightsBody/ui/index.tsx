'use client'
import { FlightCard } from '@/components/entities/flightCard'
import { FlightsFilter } from '@/components/features/flightsFilter/ui'
import { FlightsSort } from '@/components/features/flightsSort'
import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { fetchTripList, selectTripList } from '@/components/entities/TripList';
import { useParams, useSearchParams } from 'next/navigation'
export const FlightsBody = () => {

  const useDispatch = useAppDispatch()

  const searchParams = useSearchParams()




  const tripList = useAppSelector(selectTripList)



  useEffect(() => {
     const params:any = {} 
     for (const [key, value] of searchParams.entries()) {
      params[key] = value
      console.log(`${key}, ${value}`, searchParams.entries());
    }
    
     console.log('params',  params);
     
   
        
    useDispatch(fetchTripList(params))
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

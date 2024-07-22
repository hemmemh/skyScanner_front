'use client'
import { FlightCard } from '@/components/entities/flightCard'
import { FlightsFilter } from '@/components/features/flightsFilter/ui'
import { FlightsSort } from '@/components/features/flightsSort'
import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { fetchTripList, selectTripList } from '@/components/entities/TripList';
import { useParams, useSearchParams } from 'next/navigation'
import { isTripsPairs } from '@/components/shared/quards/guards'
export const FlightsBody = () => {

  const useDispatch = useAppDispatch()

  const searchParams = useSearchParams()
  const params =  useParams()




  const tripList = useAppSelector(selectTripList)



  useEffect(() => {
    console.log(' paramss',  params);
    
     const query:any = {} 
     for (const [key, value] of searchParams.entries()) {
      query[key] = value
      console.log(`${key}, ${value}`, searchParams.entries());
    }
    
    
    useDispatch(fetchTripList({query, params}))
    return () => {
    
    }
  }, [])


  useEffect(() => {
     console.log('searchParams', searchParams);
     const query:any = {} 
     for (const [key, value] of searchParams.entries()) {
      query[key] = value
      console.log(`${key}, ${value}`, searchParams.entries());
    }
    useDispatch(fetchTripList({query, params}))
     
  }, [searchParams])
  


  return (


    
          <div className={styles.body}>
    <FlightsSort/>
    <div className={styles.cards}>
    {tripList && tripList.map((el, i)=>
    {if (isTripsPairs(el)) return <FlightCard key={i}  data={el}/>
    if (!isTripsPairs(el)) return <FlightCard key={i}  data={el}/>
   }

    )}
    </div>


    </div>



  )
}

'use client'

import React, { FC, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { Title } from '@/components/shared/ui/title';
import { Button, IconButton } from '@mui/material';
import { FlightBigCard } from '@/components/entities/flightBigCard';
import { Add } from '@/components/shared/ui/add';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { useParams, useSearchParams } from 'next/navigation';
import { fetchTrips, selectTrips } from '@/components/entities/Trip';
import { isTripsPairs } from '@/components/shared/quards/guards';
import { ITrip } from '@/components/shared/api/trip';
import { weekDayAndDatefromMs } from '@/components/shared/lib/flight';
import { ISeatClass } from '@/components/shared/api/seatClass';
import { createOrder } from '@/components/shared/api/order/order';
import { addOrderAction, selectUser } from '@/components/entities/user';
import { MySnackBar } from '@/components/shared/ui/snackBar/ui';

export const Details = () => {

  const useDispatch = useAppDispatch()

  const searchParams = useSearchParams()
  const params =  useParams<{depart:string, return?:string}>()
  const [seatNumber, setSeatNumber] = useState(0)
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [snackBarMessage, setSnackBarMessage] = useState('')
  const [payedOrder, setPayedOrder] = useState(false)



  const trips = useAppSelector(selectTrips)
  const user = useAppSelector(selectUser)

  useEffect(() => {
    const seatNumberQuery = searchParams.get('seatNumber')
    const seatClassQuery = searchParams.get('seatClass')
  if(seatNumberQuery && seatClassQuery){
     setSeatNumber(+seatNumberQuery)
  }
   
   
   useDispatch(fetchTrips({params}))
  }, [])

  useEffect(() => {
    setPayedOrder(isOrderPayed())
    console.log(trips, user );
    
  }, [trips, user])
  

  const addToOrder = ()=>{
    if (!user) {
      setSnackBarOpen(true)
      setSnackBarMessage('Не авторизован')
    }
    if (user && trips) {
       if(isTripsPairs(trips)){
        useDispatch(addOrderAction({user, from:trips[0], to:trips[1]})).then(data=>{
          setSnackBarOpen(true)
          setSnackBarMessage('Успешное офромление билета')
        }).catch(error=>{
          setSnackBarOpen(true)
          setSnackBarMessage(error.data.response.message)
        })
    
       }else{
        useDispatch(addOrderAction({user, from:trips})).then(data=>{
          setSnackBarOpen(true)
          setSnackBarMessage('Успешное офромление билета')
        }).catch(error=>{
          setSnackBarOpen(true)
          setSnackBarMessage(error.data.response.message)
        })
       }
    }
   
  }
  
  const isOrderPayed = ()=>{

    
    if(!trips || !user) return false

    if(isTripsPairs(trips)){
     const finded =  user.orders.find(order=>{
        const fromOrder = order.from.every((trip, i)=>{
           const tripEl = trips[0][i]
           if (!tripEl) return false
           if (trip.uid !== tripEl.uid)return false
           return true
        })

        const toOrder = order.to.every((trip, i)=>{
          const tripEl = trips[1][i]
          if (!tripEl) return false
          if (trip.uid !== tripEl.uid)return false
          return true
       })
       return fromOrder && toOrder
      })

      if (finded) {
        return true
      }else{
        return false
      }
    }else{
      const finded =   user.orders.find(order=>{
        return order.from.every((trip, i)=>{
           const tripEl = trips[i]
           console.log('TT', tripEl);
           if (!tripEl) return false
           if (trip.uid !== tripEl.uid)return false
           return true
        })

 
      })
    
      if (finded) {
        return true
      }else{
        return false
      }
    }

   
  }

  const FlightCards = ({trips}:{trips: ITrip[] | [ITrip[], ITrip[]]})=>{
 if(isTripsPairs(trips)){
  return <>
                  <div className={styles.info}>
                    <div className={styles.info__title}>OutBound: {weekDayAndDatefromMs(+trips[0][0].departure_time)}</div>
                    {trips &&  <FlightBigCard data={trips[0]}/>}
                   
                </div>
                <div className={styles.info}>
                    <div className={styles.info__title}>Return: {weekDayAndDatefromMs(+trips[1][0].departure_time)}</div>
                    {trips && <FlightBigCard data={trips[1]}/>}
                    
                </div>
  </>
 }

 return <>
             <div className={styles.info}>
                    <div className={styles.info__title}>Return {weekDayAndDatefromMs(+trips[0].departure_time)}</div>
                    {trips && <FlightBigCard data={trips}/>}
                    
                </div>
 </>
  }


  
  return (
    <div className={styles.main}>
        <div className='container'>
            <div className={styles.body}>
              <Title className={styles.titleColor} size='medium'>Flight details</Title>
              <div className={styles.infos}>
                <div className={styles.flightInfos}>
                <div className={styles.data}>
             {trips &&  <FlightCards trips={trips}/>}
                </div>

                <div className={styles.pay}>
                  {payedOrder ? 
                   <Button variant="contained" >Оплачено</Button> :
                   <Button onClick={addToOrder} variant="contained" >Оплатить</Button>
                   }
               
              </div>
                </div>
                <div className={styles.add}>
                    <Add/>
                </div>
              </div>

            </div>
        </div>
        <MySnackBar open={snackBarOpen} onChange={e=>setSnackBarOpen(e)} horizontal='center' vertical='bottom' message={snackBarMessage}/>
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss';
import { User } from './user';
import { Booking } from './booking';



export const Options = () => {

  const [option, setoption] = useState(2)
  return (
   <div className={styles.main}>
    {option === 1 &&  <User/>}
    {option === 2 &&  <Booking/>}
  

   </div>

  

    
  )
}

 

import React from 'react'
import styles from './styles.module.scss';
import { IoAirplaneSharp } from 'react-icons/io5';
import Image from 'next/image';
import firstLogo from '@/public/images/booking-logo.svg'
import secondLogo from '@/public/images/hotels-logo.svg'
import thirdLogo from '@/public/images/trip-logo.svg'
import { Title } from '../title';
import { Button } from '@mui/material';
export const Add = () => {
  return (
    <div className={styles.item}>
    <div className={styles.logos}>
       <Image src={firstLogo} alt='logo'/>
        <Image src={secondLogo} alt='logo'/>
        <Image src={thirdLogo} alt='logo'/>
    </div>
    <Title className={styles.titleColor} size='medium'>Found flights? Now find a hotel</Title>
    <Title className={styles.titleColor} size='text'>Get results from all the top hotel sites right here on Skyscanner.</Title>
    <Button sx={{width:'100%'}} variant='contained'>Explore Hotel</Button>
  </div>
  )
}

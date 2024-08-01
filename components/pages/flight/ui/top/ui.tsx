'use client'
import React from 'react'
import styles from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { Title } from '@/components/shared/ui/title';
import { IconButton } from '@mui/material';
import { getTripData } from '@/components/shared/lib/flight/getTripData';
export const Top = () => {

    const {cityName, seatClass, seatNumber} = getTripData()

  return (
    <div className={styles.main}>
        <div className='container'>
            <div className={styles.body}>
                <div className={styles.info}>
                    <Title size='xl'>{cityName}</Title>
                    <div className={styles.allInfo}>{seatNumber}•{seatClass?.name}</div>
                </div>
                <div className={styles.favorite}>
                    <IconButton ><MdFavoriteBorder color='white'/></IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import styles from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { Title } from '@/components/shared/ui/title';
import { Button, IconButton } from '@mui/material';
import { FlightBigCard } from '@/components/entities/flightBigCard';
import { Add } from '@/components/shared/ui/add';
export const Details = () => {
  return (
    <div className={styles.main}>
        <div className='container'>
            <div className={styles.body}>
              <Title className={styles.titleColor} size='medium'>Flight details</Title>
              <div className={styles.infos}>
                <div className={styles.flightInfos}>
                <div className={styles.data}>
                <div className={styles.info}>
                    <div className={styles.info__title}>Outbound Tue, 9 Jul 2024</div>
                    <FlightBigCard/>
                </div>
                <div className={styles.info}>
                    <div className={styles.info__title}>Return Tue, 16 Jul 2024</div>
                    <FlightBigCard/>
                </div>
                </div>

                <div className={styles.pay}>
                <Button variant="contained" >Оплатить</Button>
              </div>
                </div>
                <div className={styles.add}>
                    <Add/>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

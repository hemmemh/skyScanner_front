import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';
import mainImage from '@/public/images/shutterstock_1278417400.jpg';
import { Title } from '@/components/shared/ui/title';
import { Button } from '@mui/material';

export const Destination = () => {
  return (
     <div className={styles.main}>
      <div className='container'> 
        <div className={styles.body}>
        <div className={styles.info}>
      
      <Title marginBottom='5px'>Can’t decide where to go?</Title>
      <Title marginBottom='20px' size='xl'>Explore every destination</Title>
       <Button color='inherit' variant="contained">Search flights</Button>
    </div>
  <div className={styles.image_cover}>
    I            <Image
              src={mainImage}
              width={1000}
              height={1000}
              className={styles.image}
              alt="logo"
            />
  </div>
        </div>

      </div>

     </div>
  )
}

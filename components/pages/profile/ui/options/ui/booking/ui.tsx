import React from 'react'
import styles from './styles.module.scss';
import { Title } from '@/components/shared/ui/title';
import { IoIosArrowForward } from 'react-icons/io';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { FlightData } from '@/components/shared/ui/flightData';
export const Booking = () => {
  return (
     <div className={styles.main}>
        <div className={styles.body}>
            <Title className={styles.titleColor} size='large'>Your bookings</Title>
            <Accordion sx={{width:'100%'}}>
        <AccordionSummary
          expandIcon={<IoIosArrowForward />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Заказ от 24.02.2024
        </AccordionSummary>
        <AccordionDetails>
            <div className={styles.item}>
                <div className={styles.item__component}>
                    <div className={styles.item__company}>имя компании</div>
                     <FlightData/>
                </div>
                <div className={styles.item__component}>
                    <div className={styles.item__company}>имя компании</div>
                     <FlightData/>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
        </div>
     </div>
  )
}

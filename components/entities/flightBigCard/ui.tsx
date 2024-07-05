'use client'
import React from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { IoAirplaneSharp } from "react-icons/io5";
import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";

import { MdFavoriteBorder } from "react-icons/md";
import { FlightData } from '@/components/shared/ui/flightData';
import { FlightVertData } from '@/components/shared/ui/flightVertData';
import { IoIosArrowDown } from 'react-icons/io';
export const FlightBigCard = () => {
  return (
     <div className={styles.main}>
      <div className={styles.body}>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className={styles.head}>
            <div className={styles.company}>Company</div>
            <FlightData/>
          </div>

        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.bort}>Lufthansa LH135</div>
          <FlightVertData/>
          <div className={styles.infos}>
          <div className={styles.info}>Arrives: Tue, 9 Jul 2024</div>
          <span className={styles.span}></span>
          <div className={styles.info}>Journey duration: 0h 50</div>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>
     </div>
  )
}

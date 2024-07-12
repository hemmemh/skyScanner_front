'use client'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';
import { Title } from '@/components/shared/ui/title';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { IoIosArrowDown } from "react-icons/io";


const accordionContent = [
  {title:'How does Skyscanner work?',
  text:'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.'
  },
  {title:'How does Skyscanner work?',
    text:'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.'
  },
  {title:'How does Skyscanner work?',
    text:'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.'
  },
  {title:'How does Skyscanner work?',
    text:'We’re a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.'
  },
  
]
const accordionStyle = {
  boxShadow:'none',
   '.MuiAccordionSummary-root':{padding:'0 !important'}}
export const Info = () => {
  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.body}>
          <Title size='medium' className={styles.titleAccordion}>Booking flights with Skyscanner</Title>
          <div className={styles.content}>
            <div className={styles.accordionContent}>
              {accordionContent.map(el=>
                            <Accordion sx={accordionStyle}  key={el.title}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title size='small' className={styles.titleAccordion}>{el.title}</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.text}>
                                 {el.text}
                                </div>
                            </AccordionDetails>
                                </Accordion>
              )}

            </div>
            <div className={styles.accordionContent}>
            {accordionContent.map(el=>
                            <Accordion sx={accordionStyle} key={el.title}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title size='small' className={styles.titleAccordion}>{el.title}</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.text}>
                                 {el.text}
                                </div>
                            </AccordionDetails>
                                </Accordion>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

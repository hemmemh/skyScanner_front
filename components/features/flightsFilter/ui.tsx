"use client"
import { Title } from '@/components/shared/ui/title'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './styles.module.scss';

const accordionStyle = {
    boxShadow:'none',
     '.MuiAccordionSummary-root':{padding:'0 !important'}}

export const FlightsFilter = () => {

    const [value, setValue] = useState<number[]>([20, 37]);
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };


  return (
    <div className={styles.main}>

                            <Accordion sx={accordionStyle}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title className={styles.titleAccordion} size='small'>Departure Times</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.outBound}>
                                  <div className={styles.text}>Outbound</div>
                                 <div className={styles.slider_values}>
                                 <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {value[0]}
                                     </Typography>
                                     -
                                     <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {value[1]}
                                     </Typography>
                                    </div>   
                                <Slider
                            
                                   value={value}
                                   onChange={handleChange}
                                   valueLabelDisplay="auto"
                      
                                />
                                </div>
                            </AccordionDetails>
                            </Accordion>
                            <Accordion sx={accordionStyle}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title className={styles.titleAccordion} size='small'>Journey duration</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.outBound}>
                                 <div className={styles.slider_values}>
                                 <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {value[0]}
                                     </Typography>
                                     -
                                     <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {value[1]}
                                     </Typography>
                                    </div>   
                                <Slider
                            
                                   value={value}
                                   onChange={handleChange}
                                   valueLabelDisplay="auto"
                      
                                />
                                </div>
                            </AccordionDetails>
                            </Accordion>
                            <Accordion sx={accordionStyle}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title className={styles.titleAccordion} size='small'>Journey duration</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.outBound}>
                                  <FormControlLabel   
                                  label="Parent"
                                  control={    
                                  <Checkbox checked={checked} onChange={handleChange1} name="gilad" />
                                }
                                  />
     
                            
                                </div>
                            </AccordionDetails>
                            </Accordion>
                            </div>
  )
}

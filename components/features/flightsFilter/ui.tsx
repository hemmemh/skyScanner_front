"use client"
import { Title } from '@/components/shared/ui/title'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './styles.module.scss';
import { russianStopName, Stop, StopValue } from '@/components/shared/types/tripsTypes'
import { usePathname, useSearchParams ,useRouter  } from 'next/navigation'


const accordionStyle = {
    boxShadow:'none',
     '.MuiAccordionSummary-root':{padding:'0 !important'}}

const stopsDefault:Stop[] = [
  {name:'прямой', value:'direct'},
  {name:'1 пересадка', value:'oneTransfer'},
  {name:'2 пересадки', value:'twoTransfer'},
]

export const FlightsFilter = () => {

    const [value, setValue] = useState<number[]>([20, 37]);
    const [checked, setChecked] = React.useState(false);
    const [stops, setStops] = React.useState<Stop[]>(stopsDefault);
    const [uncheckedStops, setUncheckedStops] = React.useState<Stop[]>([]);
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
      const currentParams = new URLSearchParams(searchParams.toString());

      
      if (uncheckedStops.length > 0) {
        currentParams.set('stops', uncheckedStops.map(el=>el.value).join('%2C'));
      }else{
        currentParams.delete('stops')
      }
     
       router.push(`${pathname}?${currentParams.toString()}`);
    }, [uncheckedStops])
    
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
    };

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
      };

    const onStopChange = (stop:Stop)=>{
      const {name, value } = stop
     const finded = stops.find(el=>el.value === value)

     if (finded) {
      setStops(stops.filter(el=>el.value !== value))
      setUncheckedStops([...uncheckedStops, {name, value}])
     }else{
      setStops([...stops, {name, value}])
      setUncheckedStops(uncheckedStops.filter(el=>el.value !== value))
     }


    }  

    const isValueInStop = (value:StopValue) =>{
       const finded = stops.find(el=>el.value === value )
       if (finded) return true
       return false
    }

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
                              <Title className={styles.titleAccordion} size='small'>Число пересадок</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.stops}>
                                  {stopsDefault.map(el=>
                                     <FormControlLabel 
                                     key={el.value}  
                                     label={el.name}
                                     control={    
                    
                                     <Checkbox checked={isValueInStop(el.value)} onChange={()=>onStopChange(el)}  name={el.name} />
                                   }
                                     />
                                  )}
 
     
                            
                                </div>
                            </AccordionDetails>
                            </Accordion>
                            </div>
  )
}

"use client"
import { Title } from '@/components/shared/ui/title'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Slider, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './styles.module.scss';
import { russianStopName, Stop, StopValue } from '@/components/shared/types/tripsTypes'
import { usePathname, useSearchParams ,useRouter  } from 'next/navigation'
import { useAppSelector } from '@/components/shared/lib/store'
import { selectMaxTime, selectMinDepartureTime, selectMinTime } from '@/components/entities/TripList'
import { getHoursAndMinutes, getHoursFromMs } from '@/components/shared/lib/flight/day'
import { selectMaxDepartureTime } from '@/components/entities/TripList/model/selectors'


const accordionStyle = {
    boxShadow:'none',
     '.MuiAccordionSummary-root':{padding:'0 !important'}}

const stopsDefault:Stop[] = [
  {name:'прямой', value:'direct'},
  {name:'1 пересадка', value:'oneTransfer'},
  {name:'2 пересадки', value:'twoTransfer'},
]

export const FlightsFilter = () => {


    const [time, setTime] = useState<number[]>([0, 0])
    const timeFirstUpdate = useRef(true)
    const searchParamsFirstUpdate = useRef(true)
    const departureTimeFirstUpdate = useRef(true)
    const uncheckedStopsFirstUpdate = useRef(true)

    const [departureTime, setDepartureTime] = useState<number[]>([0, 0]);

    const [rangeTime, setRangeTime] = useState<number[]>([0, 0]);
    const [rangeDepartureTime, setRangeDepartureTime] = useState<number[]>([0, 0]);
    const [stops, setStops] = React.useState<Stop[]>(stopsDefault);
    const [uncheckedStops, setUncheckedStops] = React.useState<Stop[]>([]);


    const pathname = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();
    const minTime = useAppSelector(selectMinTime)
    const maxTime = useAppSelector(selectMaxTime)
    const minDepartureTime = useAppSelector(selectMinDepartureTime)
    const maxDepartureTime = useAppSelector(selectMaxDepartureTime)

    useEffect(() => {
      if (searchParamsFirstUpdate.current = false) return
      searchParamsFirstUpdate.current =  false
    
   const timeParam = searchParams.get('time') ? searchParams.get('time')?.split('%2C') : []
   const departTimeParam = searchParams.get('departureTimeFiltr') ? searchParams.get('departureTimeFiltr')?.split('%2C') : []
   const stopsParam:StopValue[] | undefined = searchParams.get('stops') ? searchParams.get('stops')?.split('%2C') as StopValue[] : []

   if (timeParam && timeParam.length !== 0) {
      setTime([+timeParam[0], +timeParam[1]])
   }

   if (departTimeParam && departTimeParam.length !== 0) {
    setDepartureTime([+departTimeParam[0], +departTimeParam[1]])
   }

   if (stopsParam && stopsParam.length !== 0 && uncheckedStopsFirstUpdate.current) {


    setUncheckedStops(stops.filter(el=>stopsParam.includes(el.value)))
    setStops(stops.filter(el=>!stopsParam.includes(el.value)))
   }
   
    }, [searchParams])
    

    useEffect(() => {
      const currentParams = new URLSearchParams(searchParams.toString());
  
      
      
      console.log('uncheckedStopsFirstUpdate', uncheckedStopsFirstUpdate);
      if (!uncheckedStopsFirstUpdate.current) {
        console.log('uncheckedStopsFirstUpdate', uncheckedStops);
        
        if (uncheckedStops.length > 0) {
          currentParams.set('stops', uncheckedStops.map(el=>el.value).join('%2C'));
        }else{
          currentParams.delete('stops')
        }
        router.push(`${pathname}?${currentParams.toString()}`);
      }
     
    }, [uncheckedStops])

    useEffect(() => {
      setRangeTime([minTime, maxTime])
      const timeParam = searchParams.get('time') ? searchParams.get('time')?.split('%2C')  : []
      
 if (timeParam?.length === 0) {
    setTime([minTime, maxTime])
   }

    
    
   
    }, [minTime, maxTime])


    useEffect(() => {
 
      const currentParams = new URLSearchParams(searchParams.toString());

      
      


      if (!timeFirstUpdate.current) {
        currentParams.set('time', time.join('%2C'));
        router.push(`${pathname}?${currentParams.toString()}`);
      }

    
   
    }, [time])



    useEffect(() => {
 
      const currentParams = new URLSearchParams(searchParams.toString());
      console.log(' departureTimeFirstUpdate',  departureTimeFirstUpdate);
      if (!departureTimeFirstUpdate.current) {
        console.log(' departureTimeFirstUpdate',  departureTimeFirstUpdate);
        currentParams.set('departureTimeFiltr', departureTime.join('%2C'));
        router.push(`${pathname}?${currentParams.toString()}`);
      }

    
   
    }, [departureTime])



    useEffect(() => {
      setRangeDepartureTime([minDepartureTime, maxDepartureTime])
      const departTimeParam = searchParams.get('departureTimeFiltr') ? searchParams.get('departureTimeFiltr')?.split('%2C')  : []
      if (departTimeParam?.length === 0) {
        setDepartureTime([minDepartureTime, maxDepartureTime])
      }
      
    
   
    }, [minDepartureTime, maxDepartureTime])


    
    

    const onTimeChange = (event: Event, newValue: number | number[])=>{
          timeFirstUpdate.current = false
          setTime(newValue as number[])
    }

    const onDepartureTimeChange = (event: Event, newValue: number | number[])=>{
      departureTimeFirstUpdate.current = false
      setDepartureTime(newValue as number[])
}

    const onStopChange = (stop:Stop)=>{

      const {name, value } = stop
     const finded = stops.find(el=>el.value === value)
    console.log('gg', finded);
    
     if (finded) {
      setStops(stops.filter(el=>el.value !== value))
      setUncheckedStops([...uncheckedStops, {name, value}])
     }else{
      setStops([...stops, {name, value}])
      setUncheckedStops(uncheckedStops.filter(el=>el.value !== value))
     }
      uncheckedStopsFirstUpdate.current = false

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
                                     { getHoursAndMinutes(departureTime[0])}
                                     </Typography>
                                     -
                                     <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {getHoursAndMinutes(departureTime[1])}
                                     </Typography>
                                    </div>   
                                <Slider
                                min={rangeDepartureTime[0]}
                                max={rangeDepartureTime[1]}
                                step={30}
                                   value={departureTime}
                                   valueLabelFormat={getHoursAndMinutes}
                                   onChange={onDepartureTimeChange}
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
                                     {getHoursFromMs(time[0])} часов
                                     </Typography> 

                                     <span></span>

                                     <Typography className={styles.text} id="non-linear-slider" gutterBottom>
                                     {getHoursFromMs(time[1])} часов 
                                     </Typography>

                                    </div>   
                                <Slider
                                   step={360000}
                                   min={rangeTime[0]}
                                   max={rangeTime[1]}
                                   value={time}
                                   valueLabelFormat={getHoursFromMs}
                                   onChange={onTimeChange}
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

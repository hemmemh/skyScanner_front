'use client'
import React, { Children, FC, InputHTMLAttributes, MouseEventHandler, ReactEventHandler, ReactNode, Ref, RefAttributes, forwardRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Input } from '../input';
import { renderToStaticMarkup } from 'react-dom/server';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';


interface Autocomplete {


  className?:string;
  label?:string
  onChange:(value:Dayjs)=>void
}

export const DatePicker:FC<Autocomplete> = ({className = 'default', onChange, label}) => {

  const [day, setDay] = useState(dayjs())
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarRef = useRef(null)
  const caseRef = useRef(null)
  
  const calendarStyle = {
    display:calendarOpen ? 'block' : 'none', 
    position:'absolute', 
    background:'#fff', 
    top:'calc(100% + 2px)', 
    left:'0', zIndex:'2200'
  }

  const dateClick = (day:Dayjs)=>{

    setDay(day)
    onChange(day)
  }

  const closeCalendar = (e:any) =>{
    console.log('ddd');
    if (!calendarRef.current)  return
    if (!caseRef.current)  return
    const target = e.target as HTMLElement
   
    
    const calendar = calendarRef.current as HTMLElement
    const datePicker = caseRef.current as HTMLElement
  
    
    if (datePicker.contains(target) ) {
      setCalendarOpen(true)
      return
    }
  
  if(calendar?.contains(target)){
    setCalendarOpen(true)
    return
  }
  

  
  setCalendarOpen(false)
   
  
  
  }

  useEffect(() => {
  
    document.addEventListener('click',closeCalendar)
 
   return () => {
  
     document.removeEventListener('click',closeCalendar)
   }
 }, [])






  return (
    <div ref={caseRef} className={clsx(styles.case, className, {[styles.active]:calendarOpen})} >
    <div className={styles.case__body}>
    <div className={styles.case__upText}>{label}</div>
          <div >
                      <Input  value={day.format('DD/MM/YYYY')}/>
                      <DateCalendar sx={calendarStyle} ref={calendarRef} onChange={dateClick}/>
          </div> 
    </div>
  
    </div>
  )
}

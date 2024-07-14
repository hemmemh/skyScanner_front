'use client'
import React, { Children, FC, InputHTMLAttributes, MouseEventHandler, ReactEventHandler, ReactNode, Ref, RefAttributes, forwardRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Input } from '../input';
import { renderToStaticMarkup } from 'react-dom/server';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { IoIosClose } from 'react-icons/io';


interface Autocomplete {

  value?:Dayjs | null
  className?:string;
  label?:string
  onChange:(value:Dayjs | null)=>void
}

export const DatePicker:FC<Autocomplete> = ({className = 'default', onChange, label, value = dayjs()}) => {

  const [day, setDay] = useState<Dayjs | null>(value)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarRef = useRef(null)
  const caseRef = useRef(null)
  
  const calendarStyle = {
    display:calendarOpen ? 'block' : 'none', 
    boxShadow:'0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
    position:'absolute', 
    background:'#fff', 
    top:'calc(100% + 2px)', 
    left:'0', zIndex:'2200'
  }

  const dateClick = (day:Dayjs | null)=>{

    setDay(day)
    onChange(day)
  }

  const closeCalendar = (e:any) =>{
    console.log('ddd', calendarRef.current, caseRef.current);
    if (!calendarRef.current)  return
    if (!caseRef.current)  return
    const target = e.target as HTMLElement
   
    
    const calendar = calendarRef.current as HTMLElement
    const datePicker = caseRef.current as HTMLElement
   const close  = datePicker.querySelector(`.${styles.case__reset}`)
    console.log('close', close);
    if (!close)  return
    
    if (datePicker.contains(target) &&  target !== close && !close.contains(target)) {
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
  console.log('day', day);
  
    document.addEventListener('click',closeCalendar)
 
   return () => {
  
     document.removeEventListener('click',closeCalendar)
   }
 }, [])








  return (
    <div ref={caseRef} className={clsx(styles.case, className, {[styles.active]:calendarOpen})} >
    <div className={styles.case__body}>
      <div className={styles.case__info}>
         <div className={styles.case__upText}>{label}</div>
         <div > 
                      <Input  value={day ? day.format('DD/MM/YYYY') : 'Дата'}/>
                      <DateCalendar sx={calendarStyle} ref={calendarRef} onChange={dateClick}/>
         </div> 
      </div>
      <div onClick={()=>dateClick(null)}  className={clsx(styles.case__reset, {[styles.case__reset_active]: day})}>
      <IoIosClose size={30} />
      </div>
    </div>
  
    </div>
  )
}

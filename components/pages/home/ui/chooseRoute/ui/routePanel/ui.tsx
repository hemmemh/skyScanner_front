'use client'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';

import { BiSolidPlaneAlt } from "react-icons/bi";
import { Input } from '@/components/shared/ui/input';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar} from '@mui/x-date-pickers';
import clsx from 'clsx';
import { Button } from '@mui/material';
import { Autocomplete } from '@/components/shared/ui/autocomplete';
import { DatePicker } from '@/components/shared/ui/datePicker/ui';
import { SeatPicker } from '@/components/shared/ui/seatPicker';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { fetchCityList, selectCityList } from '@/components/entities/cityList';
import { fetchSeatClassList, selectSeatClassList } from '@/components/entities/seatClassList';
import { ISeatClass } from '@/components/shared/api/seatClass';
import { useRouter } from 'next/navigation';



type panelInputLabel = 'from' | 'to' | 'depart' | 'return' | 'seatNumber' | 'seatClass'

interface Info{
  from:string,
  to:string,
  depart:number,
  return:number,
  seatNumber:number,
  seatClass:string
}


const infoDefault:Info = {
  from:'',
  to:'',
  depart: dayjs().valueOf(),
  return:dayjs().add(1,'day').valueOf(),
  seatNumber:1,
  seatClass: ''
}

const  citiesDefault  ={
  from: ['Москва', 'Саратов'],
  to: ['Москва', 'Саратов'],
}



export const RoutePanel = () => {
  const useDispatch = useAppDispatch()
  const router = useRouter()
  
  useEffect(() => {
      useDispatch(fetchCityList())
      useDispatch(fetchSeatClassList())
  }, [])
  

const [info, setInfo] = useState<Info>(infoDefault)

const cityList = useAppSelector(selectCityList)
const seatClassList = useAppSelector(selectSeatClassList)
const onInfoChange = (type:panelInputLabel, value:string | number | ISeatClass)=>{
  setInfo(prev=>({...prev, [type]:value}))
}


const onSeatChange = (seatNumber:number, seatClass:string)=>{
  console.log('seatClass', seatClass);
  
  onInfoChange('seatNumber',seatNumber) 
  onInfoChange('seatClass',seatClass) 

}

const onCityChange = (name:string, type:'from' | 'to')=>{
const item = cityList.find(el=>el.name === name)
if (item && type === 'from') {
  info.from = item.uid
}
if (item && type === 'to') {
  info.to = item.uid
}

}



const findTrips = ()=>{
  console.log('info',info);
  router.push(`flights?from=${info.from}&to=${info.to}&depart=${info.depart}&return=${info.return}&seatNumber=${info.seatNumber}&seatClass=${info.seatClass}`)

  
}

  return (
    <div className={styles.main}>
        <div className={styles.body}>
          <Autocomplete items={cityList.map(el=>el.name)} className={styles.first}  label='откуда' placeholder='Город' onChange={(e:string)=>onCityChange(e, 'from')}/>
          <Autocomplete items={cityList.map(el=>el.name)} label='куда' placeholder='Город' onChange={(e:string)=>onCityChange(e, 'to')}/>
          <DatePicker value={dayjs(info.depart)} label='отлет' onChange={(e:Dayjs)=> onInfoChange('depart', e.valueOf())}/>
          <DatePicker value={dayjs(info.return)} label='возврат' onChange={(e:Dayjs)=> onInfoChange('return', e.valueOf())}/>
          <SeatPicker  onChange={(e)=>onSeatChange(e.seatNumber, e.seatClass)}  className={styles.last} label='класс и количество мест' placeholder='1 место, эконом' />
        </div>
        <Button onClick={findTrips}   variant="contained">Найти</Button>
    </div>
  )
}

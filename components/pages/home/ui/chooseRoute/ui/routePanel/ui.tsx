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
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Info, panelInputLabel } from '@/components/shared/types/tripsTypes';
import { ICity } from '@/components/shared/api/city';
dayjs.extend(utc)
dayjs.extend(timezone)




const infoDefault:Info = {
  from:'',
  to:'',
  seatNumber:1,
  seatClass: '',
  sort: 'optimal'
}



export const RoutePanel = () => {
  const useDispatch = useAppDispatch()
  const router = useRouter()
  

  const [info, setInfo] = useState<Info>(infoDefault)
  const [depart, setDepart] = useState<number| null>(dayjs().valueOf())
  const [returnState, setReturnState] = useState<number| null>(null)
  const [fromCityList, setFromCityList] = useState<ICity[]>([])
  const [toCityList, setToCityList] = useState<ICity[]>([])
  const cityList = useAppSelector(selectCityList)

  useEffect(() => {
      useDispatch(fetchCityList())
      useDispatch(fetchSeatClassList())
  }, [])

  useEffect(() => {
    setFromCityList(cityList)
    setToCityList(cityList)
  }, [cityList])
  
  




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
  const newToCityList = cityList.filter(el=>el.uid !== item.uid)
  setToCityList(newToCityList)
}
if (item && type === 'to') {
  info.to = item.uid
  const newFromCityList = cityList.filter(el=>el.uid !== item.uid)
  setFromCityList(newFromCityList)
}

}



const findTrips = ()=>{
  console.log('info',info);
  if (returnState) {
    router.push(`flights/${depart}/${returnState}/?from=${info.from}&to=${info.to}&seatNumber=${info.seatNumber}&seatClass=${info.seatClass}&sort=${info.sort}`)
  }else{
    router.push(`flights/${depart}?from=${info.from}&to=${info.to}&seatNumber=${info.seatNumber}&seatClass=${info.seatClass}&sort=${info.sort}`)
  }
 

  
}

  return (
    <div className={styles.main}>
        <div className={styles.body}>
          <Autocomplete items={fromCityList.map(el=>el.name)} className={styles.first}  label='откуда' placeholder='Город' onChange={(e:string)=>onCityChange(e, 'from')}/>
          <Autocomplete items={toCityList.map(el=>el.name)} label='куда' placeholder='Город' onChange={(e:string)=>onCityChange(e, 'to')}/>
          <DatePicker value={dayjs(depart)} label='отлет' onChange={(e:Dayjs| null)=>setDepart(e?.utc(true).valueOf() ?? null)}/>
          <DatePicker value={returnState ? dayjs(returnState) : null} label='возврат' onChange={(e:Dayjs | null) => setReturnState(e?.utc(true).valueOf() ?? null)}/>
          <SeatPicker  onChange={(e)=>onSeatChange(e.seatNumber, e.seatClass)}  className={styles.last} label='класс и количество мест' placeholder='1 место, эконом' />
        </div>
        <Button onClick={findTrips}   variant="contained">Найти</Button>
    </div>
  )
}

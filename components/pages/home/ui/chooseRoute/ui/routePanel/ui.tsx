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



type panelInputLabel = 'from' | 'to' | 'depart' | 'return'

interface Info{
  from:string,
  to:string,
  depart:dayjs.Dayjs
  return:dayjs.Dayjs
}


const infoDefault:Info = {
  from:'',
  to:'',
  depart: dayjs(),
  return:dayjs().add(1,'day')
}

const  citiesDefault  ={
  from: ['Москва', 'Саратов'],
  to: ['Москва', 'Саратов'],
}



export const RoutePanel = () => {

const [info, setInfo] = useState<Info>(infoDefault)


const onInfoChange = (type:panelInputLabel, value:string)=>{
  setInfo(prev=>({...prev, [type]:value}))
}


  return (
    <div className={styles.main}>
        <div className={styles.body}>
          <Autocomplete className={styles.first}  label='откуда' placeholder='Город' onChange={(e:string)=>onInfoChange('from', e)}>
            {citiesDefault.from.map(el=>
                 <div className={styles.popper__item} key={el}>
                 <BiSolidPlaneAlt/>
                 <div className={styles.popper__text}>{el}</div>
              </div>
            )}
          </Autocomplete>
          <Autocomplete label='куда' placeholder='Город' onChange={(e:string)=>onInfoChange('to', e)}>
            {citiesDefault.from.map(el=>
                 <div className={styles.popper__item} key={el}>
                 <BiSolidPlaneAlt/>
                 <div className={styles.popper__text}>{el}</div>
              </div>
            )}
          </Autocomplete>
          <DatePicker label='отлет' onChange={(e:Dayjs)=> onInfoChange('depart', e.format('DD/MM/YYYY'))}/>
          <DatePicker className={styles.last} label='возврат' onChange={(e:Dayjs)=> onInfoChange('return', e.format('DD/MM/YYYY'))}/>
        </div>
        <Button   variant="contained">Найти</Button>
    </div>
  )
}

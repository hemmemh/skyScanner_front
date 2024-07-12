"use client"
import React from 'react'
import styles from './styles.module.scss';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const sortList = ['cheapFirst', 'fastFirst']


export const FlightsSort = () => {

  const [sort, setSort] = React.useState(sortList[0]);



  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.result}>430 results</div>
      <div className={styles.select}>
      <div className={styles.select_label}>sortby</div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={sort}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {sortList.map(el=>   <MenuItem key={el} value={el}>{el}</MenuItem>)}
       
        </Select>
      </FormControl>
      </div>

    </div>
  )
}

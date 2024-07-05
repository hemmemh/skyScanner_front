"use client"
import React from 'react'
import styles from './styles.module.scss';
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
export const FlightsSort = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.result}>430 results</div>
      <div className={styles.select}>
      <div className={styles.select_label}>sortby</div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>

    </div>
  )
}

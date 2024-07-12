"use client"
import React, { FC, useEffect } from 'react'
import styles from './styles.module.scss';
import { Button, FormControl, IconButton, Input, MenuItem, Modal, Select, SelectChangeEvent } from '@mui/material';
import Image from 'next/image';
import logo from '@/public/logo-blue.svg'
import { Title } from '@/components/shared/ui/title';
import { IoMdClose } from 'react-icons/io';


const closeStyle={
  position:'absolute',
   top:'10px',
   right:'10px'
}

interface LogIn {
  onChange:(bool:boolean)=>void
  value:boolean
}

export const LogIn:FC<LogIn> = ({onChange, value}) => {
  const [open, setOpen] = React.useState(value);

  useEffect(() => {
    
    setOpen(value)
   
  }, [value])
  

  const handleClose = () => {
    setOpen(false);
    onChange(false)
  };

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
  >
    <div className={styles.body}>
      <div className={styles.logo}>
        <Image  src={logo} alt='logo'/>
      </div>
      <Title className={styles.titleColor} size='large'>Get the full experience</Title>
      <div className={styles.text}>Track prices, make trip planning easier and enjoy faster booking.</div>
      <div className={styles.action}>
        <Input placeholder='email'/>
        <Input placeholder='пароль  '/>
      </div>
      <div className={styles.button}>
        <Button  variant="contained"  sx={{width:'100%'}}>Войти</Button>
      </div>
      <IconButton onClick={handleClose} sx={closeStyle}><IoMdClose /></IconButton>
    </div>
  </Modal>

  )
}



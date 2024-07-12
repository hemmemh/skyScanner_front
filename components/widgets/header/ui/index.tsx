'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import logo from "@/public/logo.svg";
import { MdLanguage } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { LogIn } from '@/components/features/logIn';
import { useRouter } from 'next/navigation';
export const Header = () => {

   const router =  useRouter()
   const [openLogIn, setOpenLogIn] = useState(false)

   useEffect(() => {
      console.log('aa', openLogIn);
      
   }, [openLogIn])
   
  
  return (
    <div className={styles.header}>
                  <div className='container'>
                  <div className={styles.body}>
            <div onClick={()=>router.push('home')} className={styles.logo}>
            <Image
                  src={logo}
                  width={173}
                  height={40}
                  className={styles.logoIcon}
                  alt="logo"
                />
            </div>
            <div className={styles.actions}>
            <IconButton   color='inherit'  aria-label="language">
            <MdLanguage color='white' fontSize={25}/>
            </IconButton>
            <IconButton color='inherit'   aria-label="language">
            <MdFavorite color='white' fontSize={25}/>
            </IconButton>
            <IconButton onClick={()=>setOpenLogIn(true)}  color='inherit'  aria-label="language">
            <FaUser color='white' fontSize={25}/>
            </IconButton>
         
 


            </div>
                  </div>
                  </div>
      <LogIn value={openLogIn} onChange={setOpenLogIn}/>
    </div>
  )
}

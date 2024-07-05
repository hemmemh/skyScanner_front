import React from 'react'
import styles from './styles.module.scss';
import logo from "@/public/logo.svg";
import { MdLanguage } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { LogIn } from '@/components/features/logIn';

export const Header = () => {
  return (
    <div className={styles.header}>
                  <div className='container'>
                  <div className={styles.body}>
            <div className={styles.logo}>
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
            <IconButton  color='inherit'  aria-label="language">
            <FaUser color='white' fontSize={25}/>
            </IconButton>
         
 


            </div>
                  </div>
                  </div>
      <LogIn/>
    </div>
  )
}

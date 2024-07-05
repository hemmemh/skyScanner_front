import React from 'react'
import styles from './styles.module.scss'
import { MdFavoriteBorder } from "react-icons/md";
import { Title } from '@/components/shared/ui/title';
import { IconButton } from '@mui/material';
export const Top = () => {
  return (
    <div className={styles.main}>
        <div className='container'>
            <div className={styles.body}>
                <div className={styles.info}>
                    <Title size='xl'>Frankfurt</Title>
                    <div className={styles.allInfo}>1 adult•Return•Economy class</div>
                </div>
                <div className={styles.favorite}>
                    <IconButton ><MdFavoriteBorder color='white'/></IconButton>
                </div>
            </div>
        </div>
    </div>
  )
}

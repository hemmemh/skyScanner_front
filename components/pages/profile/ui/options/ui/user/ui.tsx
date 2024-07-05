import React from 'react'
import styles from './styles.module.scss';
import { Title } from '@/components/shared/ui/title';
import { IoIosArrowForward } from 'react-icons/io';
export const User = () => {
  return (
     <div className={styles.main}>
        <div className={styles.body}>
            <Title className={styles.titleColor} size='large'>Account</Title>
            <div className={styles.name}>General info</div>
            <div className={styles.mail}>
                <div className={styles.mail__top}>Email</div>
                <div className={styles.mail__name}>makhmutov940@gmail.com</div>
            </div>
            <div className={styles.name}>Account</div>
            <div className={styles.delete}>
                <div className={styles.delete__mame}>Delete Account</div>
                <IoIosArrowForward />
            </div>
        </div>
     </div>
  )
}

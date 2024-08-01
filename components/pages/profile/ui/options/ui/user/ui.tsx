'use client'
import React from 'react'
import styles from './styles.module.scss';
import { Title } from '@/components/shared/ui/title';
import { IoIosArrowForward } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '@/components/shared/lib/store';
import { deleteUserAction } from '@/components/entities/user/model/userThunk';
import { selectUser } from '@/components/entities/user';
export const User = () => {
    const useDispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
    const deleteUser = ()=>{
        if (!user) return
        useDispatch(deleteUserAction(user))
    }
  return (
     <div className={styles.main}>
        <div className={styles.body}>
            <Title className={styles.titleColor} size='large'>Account</Title>
            <div className={styles.name}>General info</div>
            <div className={styles.mail}>
                <div className={styles.mail__top}>Email</div>
                <div className={styles.mail__name}>{user?.email}</div>
            </div>
            <div className={styles.name}>Account</div>
            <div onClick={deleteUser} className={styles.delete}>
                <div className={styles.delete__mame}>Delete Account</div>
                <IoIosArrowForward />
            </div>
        </div>
     </div>
  )
}

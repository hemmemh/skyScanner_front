import { Footer } from '@/components/widgets/footer'
import { Header } from '@/components/widgets/header'
import React from 'react'
import styles from './styles.module.scss';
export const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className={styles.MainLayout}>
    <Header/>
    <div className={styles.children}>{children}</div>

    <Footer/>
    </div>
  )
}

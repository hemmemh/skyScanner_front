
import React from 'react'
import styles from './styles.module.scss';

import { MainLayout } from '@/components/app/layouts/mainLayout';
import { Menu } from './menu';
import { Options } from './options';

export const Profile = () => {
  return (
    <MainLayout>
      <div className='container'>
      <div className={styles.body}>
        <Menu/>
        <div className={styles.info}>
          <Options/>
        </div>
        </div>
      </div>

      </MainLayout>

    
  )
}

 
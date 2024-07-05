import React from 'react'
import styles from './styles.module.scss';
import { Title } from '@/components/shared/ui/title';
import { RoutePanel } from './routePanel';

export const ChooseRoute = () => {
  return (
    <div className={styles.chooseRoute}>
              <div className='container'>
           
                 <Title size='medium'>Миллионы дешевых авиабилетов. Один простой поисковик.</Title>
                 <RoutePanel/>
              </div>

    </div>
  )
}

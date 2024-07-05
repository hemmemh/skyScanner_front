import { FlightCard } from '@/components/entities/flightCard'
import { FlightsFilter } from '@/components/features/flightsFilter/ui'
import { FlightsSort } from '@/components/features/flightsSort'
import firstLogo from '@/public/images/booking-logo.svg'
import secondLogo from '@/public/images/hotels-logo.svg'
import thirdLogo from '@/public/images/trip-logo.svg'
import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';
import { Title } from '@/components/shared/ui/title'
import { Button } from '@mui/material'
import { Add } from '@/components/shared/ui/add'
import { HiMiniUser } from 'react-icons/hi2'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineAirplaneTicket } from 'react-icons/md'
export const Menu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.user}>
          <Title className={styles.titleColor} size='large'>Hi there!</Title>
          <div className={styles.mail}>makhmutov940@gmail.com</div>
        </div>
        <div className={styles.nav}>
          <div className={styles.navItem}>
          <div className={styles.navItem__icon}>
          <HiMiniUser />
          </div>
          <div className={styles.navItem__text}>Account</div>
           <div className={styles.navItem__arrow}>
           <IoIosArrowForward />
           </div>
          </div>
          <div className={styles.navItem}>
          <div className={styles.navItem__icon}>
          <MdOutlineAirplaneTicket />
          </div>
          <div className={styles.navItem__text}>Your bookings</div>
           <div className={styles.navItem__arrow}>
           <IoIosArrowForward />
           </div>
          </div>
        </div>
        <div className={styles.logout}>
          <Button>Log out</Button>
        </div>
      </div>
    </div>
  )
}

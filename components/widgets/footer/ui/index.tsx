import React from 'react'
import styles from './styles.module.scss';
import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { Title } from '@/components/shared/ui/title';


const accordionContent = [
  {title:'How does Skyscanner work?',
  options:['option','option','option','option','option']
  },
  {title:'How does Skyscanner work?',
    options:['option','option','option','option','option']
  },
  {title:'How does Skyscanner work?',
    options:['option','option','option','option','option']
  },
  {title:'How does Skyscanner work?',
    options:['option','option','option','option','option']
  },
  
]

const accordionStyle = {
  boxShadow:'none',
   background:'none',
  '.MuiAccordionSummary-root':{margin:'0 !important', padding:'0', minHeight:'24px !important'},
  '.MuiAccordionSummary-content':{margin:'0 !important', padding:'0'}}
export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className='container'>
        <div className={styles.body}>
          <div className={styles.top}>
             <div className={styles.language}>
            <Button sx={{width:'100%'}} variant="contained">English</Button>
             </div>
             <div className={styles.action_colums}>
            <div className={styles.action_column}>
              <Link className={styles.action} href={''}><div >Help</div></Link>
              <Link className={styles.action} href={''}><div >Help</div></Link>
              <Link className={styles.action} href={''}><div >Help</div></Link>
            </div>
            <div className={styles.action_column}>
              <Link href={''}><div className={styles.action}>Help</div></Link>
              <Link href={''}><div className={styles.action}>Help</div></Link>
              <Link href={''}><div className={styles.action}>Help</div></Link>
            </div>
            <div className={styles.action_column}>
              {accordionContent.map(el=>
                            <Accordion sx={accordionStyle} key={el.title}>
                            <AccordionSummary
                              expandIcon={<IoIosArrowDown   color='white'/>}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Title size='small' className={styles.titleAccordion}>{el.title}</Title>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.accordion_list}>
                                  {el.options.map(item=>   <Link className={styles.action} href={''} key={item}>{item}</Link>)}
                                </div>
                            </AccordionDetails>
                                </Accordion>
              ) }

            </div>
             </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.text_bottom}>Compare and book cheap flights with Skyscanner</div>
            <div className={styles.title_bottom}>Compare and book cheap flights with Skyscanner</div>
          </div>
        </div>
      </div>
    </div>
  )
}

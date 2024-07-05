'use client'
import React, { Children, FC, InputHTMLAttributes, MouseEventHandler, ReactEventHandler, ReactNode, Ref, RefAttributes, forwardRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Input } from '../input';
import { renderToStaticMarkup } from 'react-dom/server';


interface Autocomplete {

  children: ReactNode;
  className?:string;
  label:string;
  placeholder:string
  onChange:(value:string)=>void
}

export const Autocomplete:FC<Autocomplete> = ({children,className = 'default', label, onChange, placeholder = ''}) => {

  const [input, setInput] = useState('')
  const values:React.ReactNode[]= Children.toArray(children)
  const [filrerValues, setFilterValues] = useState<Array<React.ReactNode>>(values)
  const [popperOpen, setPopperOpen] = useState(false)
  const autocompleteRef = useRef(null)
  const popperRef = useRef(null)

  const valueClick = (event:EventTarget)=>{
    const target  = event as HTMLElement
    setInput(target.innerText)
    onChange(target.innerText)
  }

  const filterPopper = (value:string)=>{
  
    setInput(value)
  
    
   
      if (value === '') {
        return setFilterValues(values)
      }
  
      setFilterValues(values.filter(el=>{
        const innerText =  renderToStaticMarkup(el)
        return innerText.toLowerCase().includes(value.toLowerCase())
      }))
  
  }

  useEffect(() => {
  
    document.addEventListener('click',setPopper)
 
   return () => {
  
     document.removeEventListener('click',setPopper)
   }
 }, [])



  const setPopper = (e:any)=>{
    if (!popperRef.current)  return
    if (!autocompleteRef.current)  return
    const target = e.target as HTMLElement
   
    
    const popper = popperRef.current as HTMLElement
    const autocomplete = autocompleteRef.current as HTMLElement
    if (popper.contains(target) ) {
      return
  }
  
  if(autocomplete?.contains(target)){
    setPopperOpen(true)
    return
  }
  

  
  setPopperOpen(false)
   
  
  
  
  }


  return (
    <div ref={autocompleteRef} className={clsx(styles.case, className, {[styles.active]:popperOpen})} >
    <div className={styles.case__body}>
    <div className={styles.case__upText}>{label}</div>
          <div >
                     <Input placeholder={placeholder}  onChange={e=>filterPopper(e.target.value)}  value={input}/>
                     <div ref={popperRef} className={clsx(styles.popper, {[styles.visible]:popperOpen})}>
                      <div className={clsx(styles.popper__body)}>
                      {filrerValues.length === 0 && <div> нет значений</div>}
                       {filrerValues.map(el=>
                         <div onClick={(e)=>valueClick(e.target)}>{el}</div>
                       )}
                      </div>
                     </div>
          </div> 
    </div>
  
    </div>
  )
}

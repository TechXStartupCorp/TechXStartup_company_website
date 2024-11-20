import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './CustomBtn.module.css'

const CustomBtn = ({text}) => {
  return (
   <Button className={`${styles.customBtn} rounded-pill px-3 py-2`}>{text}</Button>
  )
}

export default CustomBtn

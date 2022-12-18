import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomePage from '../components/landing/homePage'

export default function Home() {
  return (
 
   <div className={styles.container}>
      <HomePage />
   </div>
  )
}

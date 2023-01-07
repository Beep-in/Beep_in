import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomePage from '../components/landing/homePage'
import { AuthProvider } from '../components/context/authContext'

export default function Home() {
  return (
    <AuthProvider>
   <div className={styles.container}>
      <HomePage />
   </div>
   </AuthProvider>
  )
}

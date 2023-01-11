import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../components/context/authContext'
import { ResponseProvider } from '../components/context/responseContext'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <ResponseProvider>
  <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>
  </ResponseProvider>
  )
}

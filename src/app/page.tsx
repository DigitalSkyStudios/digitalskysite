import Image from 'next/image'
import styles from './page.module.css'

import { Press_Start_2P } from '@next/font/google';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <header className="headerStyles">
      <div className={pixelFont.className}>
        <h1 className='header-title relative'> 
          Digital Sky Studios
        </h1>
      </div>
    </header> 
    <main className={styles.main}>
        <h1>Hello</h1>
      </main>
    </>
  )
}

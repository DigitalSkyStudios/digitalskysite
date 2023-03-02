import React from 'react'
import { Press_Start_2P } from '@next/font/google';
import classNames from 'classnames';
import styles from './styles.module.css';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

const blogLayout = ({children}:{children: React.ReactNode}) => {
  return (
      <div>
        <header className={classNames("headerStyles", styles.contactHeader)}>
          <div className={pixelFont.className}>
            <h1 className='header-title text-4xl relative'> 
              Get in touch!
            </h1>
          </div>
        </header> 
        {children}
      </div>
  )
}

export default blogLayout
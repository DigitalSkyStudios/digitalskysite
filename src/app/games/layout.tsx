import React from 'react'
import { Press_Start_2P } from '@next/font/google';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

const blogLayout = ({children}:{children: React.ReactNode}) => {
  return (
      <div>
           <header className="headerStyles">
          <div className={pixelFont.className}>
            <h1 className='header-title text-4xl relative'> 
             Our Games 
            </h1>
          </div>
        </header> 
          {children}
      </div>
  )
}

export default blogLayout
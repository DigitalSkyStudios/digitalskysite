// "use client"

import Footer from './Footer'
import './globals.css'
import Navigation from './Navigation';
import classNames from 'classnames';

import { Press_Start_2P, Montserrat } from '@next/font/google';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
   
      <body className={classNames(montserrat.className, 'relative')}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import classnames from 'classnames';

import { Press_Start_2P, Montserrat } from '@next/font/google';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <header className="headerStyles relative">
        <div className={pixelFont.className}>
          <h1 className='header-title relative'> 
            Digital Sky Studios
          </h1>
        </div>
      </header> 
      <main className={classnames(styles.main, montserrat.className)}>
        <section className={classnames("text-center py-3", styles.separator)}>
          <h1 className='font-bold text-2xl mb-5'>Welcome to Digital Sky</h1>
          <p className='max-w-[50ch] leading-7'>We are an indie studio focused on producing quality games,
            with the best player experience.</p>
        </section>
        <section className="flex mt-14 p-10 justify-evenly items-center gap-5 md:gap-32 flex-wrap-reverse currentGame">
          <div className="text-left align-middle">
            <h2 className='text-xl font-semibold my-4'>We are currently working on...</h2>
            <p className=''>Seconds to Slash</p>
            <p className='max-w-[40ch] font-light'>A 3D 3rd person survival game, eliminate enemies and don&apos;t
              all your health, make sure you survive.</p>
            <button className='btn:inverted py-2 px-5 mt-5'>Find out more</button>
          </div>
          <div className="image">
            <Image src="/assets/survivalGame.png" width={450} height={250} alt="game"/>
          </div>
        </section>
        <section className="mt-10 text-center">
           <h1 className='font-bold text-2xl mb-5'>Some of out other work.</h1>
          <p className='max-w-[50ch] leading-7'>
            See some of our favorites below.
          </p>         
        </section>
      </main>
    </>
  )
}

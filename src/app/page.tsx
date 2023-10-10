import Image from 'next/image'
import styles from './page.module.css'
import classnames from 'classnames';

import { Press_Start_2P, Montserrat } from '@next/font/google';

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ['latin'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <header className="headerStyles homeHeader relative">
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
          <div className="text-center md:text-left align-middle">
            <h2 className='text-xl font-semibold my-4'>We are currently working on...</h2>
            <p className=''>Dungeon Delvers</p>
            <p className='max-w-[40ch] font-light'>A 3D Dungeon Crawler game, explore procedurally generated dungeons, eliminate enemies and don&apos;t
              get lost!</p>
            <button className='btn:inverted py-2 px-5 mt-5'>Find out more</button>
          </div>
          <div className="image">
            <Image src="/assets/Dungeon_Delvers.png" width={450} height={250} alt="game"/>
          </div>
        </section>
        <section className="mt-10 text-center">
          <div className="mb-5">
            <h1 className='font-bold text-2xl mb-5'>Some of out other work.</h1>
            <p className='leading-7'>
              See some of our favorites below.
            </p>
          </div>
          <div className="games-section py-5 px-3 md:px-10">
            <div className="grid grid-rows-2 place-items-center">
              <img src="/assets/GrappleGunner.png" alt="Grapple Gunner Game" />
              <div>
                <h4 className="text-red my-4">Grapple Gunner</h4>
                <p className="">You are armed with a grapple and a grapple only. Use it overcome enemies, cross obstacles and defeat the boss.</p>
              </div>
            </div>
            <div className="grid grid-rows-2 place-items-center">
              <img src="/assets/PrisonBreak.png" alt="Prison Break Game" />
              <div>
                <h4 className="text-red my-4">Prison Break</h4>
                <p className="">Collect the keys, explode the guards, and escape the prison before time runs out, to earn freedom.</p>
              </div>
            </div> 
            <div className="grid grid-rows-2 place-items-center">
              <img src="/assets/PhantomNetwork.png" alt="Phantom Network Game" />
              <div>
                <h4 className="text-red my-4">Phantom Network</h4>
                <p className="">Command a fleet of droids to defend a network from enemy AI, the phantoms for their calculated assaults.</p>
              </div>
            </div>
          </div>
          <a href="/games" className='btn:inverted py-2 px-5'>See more</a>
        </section>

        <section className="mt-12 text-center">
          <div className="video-container">
            <div className="mb-5">
              <h1 className='font-bold text-2xl mb-5'>Latest from us.</h1>
              <p className='leading-7 max-w-[50ch] mx-auto'>
                We make videos to show you the process we take to make games! Visit our channel 
                <a
                  className='ml-1 underline text-blue-500'  
                  //href="https://www.youtube.com/@Digital_Sky_/featured"
                  href="https://www.youtube.com/watch?v=P3xGPgl379s"
                  target="_Blank" rel="noreferrer noopener"
                  >here</a>.  
              </p>
            </div>
            <div className="video mt-3">
              <div className="overlay" />
              <Image src="/assets/Dungeon_Delvers.png" width={750} height={500} alt="Video"/>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <p>We also write <span className="text-red font-extrabold">blogs</span> all about game development!</p>
          <div className="flex items-center justify-evenly mt-8 flex-wrap-reverse flex-auto">
            {/* Blog Overview */}
            <div className="blogs">
              {/* Blog */}
              
              <div className="w-full border-solid border-2 border-black py-5 px-10 text-left rounded bg-white mb-4">
                <p className="mb-2 underline max-w-[40ch]">TBA</p>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-700">00/00/00</span>
                  <a className="text-red cursor-pointer hover:underline">Read</a>
                </div>
              </div>
             <div className="w-full border-solid border-2 border-black py-5 px-10 text-left rounded bg-white mb-4">
                <p className="mb-2 underline max-w-[40ch]">TBA</p>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-700">00/00/00</span>
                  <a className="text-red cursor-pointer hover:underline">Read</a>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="max-w-[40ch] p-7">
              <div className="flex justify-center icons mb-5">
                <a href="https://twitter.com/Digital_Sky_" target="_blank" rel="noreferrer">
                  <img src="/assets/twitter.svg" alt="" />
                </a>
                <a href="https://www.youtube.com/@Digital_Sky_/featured" target="_blank" rel="noreferrer">
                  <img src="/assets/youtube.svg" alt="" />
                </a>
                <a href="https://github.com/DigitalSkyStudios/digitalskysite" target="_blank" rel="noreferrer">
                  <img src="/assets/github.svg" alt="" />
                </a>
              </div>
              <p className="mb-5">We have shown some of our favorite blogs on the left. But if you’re interested click below to see them them all!</p>
              <a href="/blogs" className='btn:inverted py-2 px-5 inline-block'>See all blogs</a>
            </div>
          </div>
        
        </section>

      </main>
    </>
  )
}

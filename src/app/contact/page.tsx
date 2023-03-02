"use client"

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './FaceCube';
import styles from './styles.module.css';

const page = () => {
  return (
  <div className="text-center">
      <div className='mb-11 mt-10 p-7'>
        <p className="max-w-[60ch] m-auto">Have an idea? A question? Just want to talk? Shoot us a message below.</p>
      </div>
      <section className={styles.gridContact}>
        <Canvas
         camera={{ position: [2, 0, 20.25], fov: 15 }}
         style={{
            backgroundColor: '#515151',
            width: '100%',
            height: '85vh',
         }}
          shadows
      >
          <ambientLight intensity={1.25} />
          <spotLight position={[0,20,0]} castShadow />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} castShadow />
         <Suspense fallback={null}>
          {/* Your model here */}
          <Model position={[0.025, 0, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
      <aside>
          <form action="https://formspree.io/f/mwkjvzko" method='POST' className="flex gap-3 flex-col px-10 py-3 min-w-[40vw] mx-auto md:mt-0 mt-10 h-full justify-center">
            <label htmlFor="name" className="self-start">Name:</label>
            <input type="text" id="name" name="name"  className='border-solid border-black border p-2 rounded' />
            <label htmlFor="email" className="self-start">Email:</label>
            <input type="email" id="email" name="email"  className='border-solid border-black border p-2 rounded'/>
            <label htmlFor="message" className="self-start">Message:</label>
            <textarea name="message" id="message" cols={30} rows={10} className='border-solid border-black border p-2 rounded'></textarea>
            <button type="submit" className="py-2 px-5 btn">Send</button>
        </form>
      </aside>
      </section>
    </div>
  )
}

export default page
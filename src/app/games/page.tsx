import styles from './games.module.css';
import classNames from 'classnames';

const pages = () => {
  return (
    <div className="text-center min-h-screen">
      <div className={classNames('mb-11 p-5', styles.separator)}>
        <h1 className="text-2xl font-bold mt-11 mb-5">So many cool things for you to check out!</h1>
        <p className="max-w-[50ch] m-auto">Digital Sky Studios has developed many games over time. You can read about them them all and play them here.</p>
      </div>
      <div className="mb-10 mt-16 pt-10 px-5">
        {/* 5 Seconds to Slash */}
        <div id="5Seconds" className='flex justify-center gap-5 flex-wrap p-3 mb-12'>
          <div className="w-96 h-72 bg-red"></div>
          <div className="flex flex-col md:text-left text-center justify-center p-7">
            <h2 className='font-bold text-2xl my-4'>Seconds to Slash</h2>
            <p className="max-w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi harum voluptate amet molestiae odio nulla odit facere quibusdam quas.</p>
            <div className="flex gap-3 flex-wrap w-full justify-center md:justify-start">
              <a className="btn:inverted px-2 py-2 mt-5 w-[40%] text-center" href="">Read About it</a>
              <a href="" className="btn:inverted px-2 py-2 mt-5 w-[40%] text-center">Play here</a>
            </div>
          </div>
        </div>

        {/* Grapple Gunner */}
        <div id="grapple" className='flex justify-center gap-5 p-3 flex-row-reverse flex-wrap mb-12'>
          <div className="w-96 h-72 bg-red"></div>
          <div className="flex flex-col text-center md:text-left justify-center p-7">
            <h2 className='font-bold text-2xl my-4'>Grapple Gunner</h2>
            <p className="max-w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi harum voluptate amet molestiae odio nulla odit facere quibusdam quas.</p>
            <div className="flex gap-3 flex-wrap w-full justify-center md:justify-start">
              <a className="btn:inverted px-2 py-2 mt-5 min-w-[40%] text-center" href="">Read About it</a>
              <a href="" className="btn:inverted px-2 py-2 mt-5 min-w-[40%] text-center">Play here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default pages
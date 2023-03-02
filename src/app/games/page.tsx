import styles from './games.module.css';
import classNames from 'classnames';
import Image from 'next/image';

// since the length is unknown I'm renaming it to a list.
type List<T> = Array<T>;

interface GameType {
  title: string;
  image: string;
  description: string;
  blogLink: string,
  gameLink: string,
}

// add games to the array, everything else is handled conditionally
// if you don't add an image it will be a red box.
const games: List<GameType> = [
  {
    title: 'Seconds to Slash',
    image: '/assets/survivalGame.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi harum voluptate amet molestiae odio nulla odit facere quibusdam quas.',
    blogLink: '',
    gameLink: '',
  },
  {
    title: 'Grapple Gunner',
    image: '/assets/GrappleGunner.png',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi harum voluptate amet molestiae odio nulla odit facere quibusdam quas.',
    blogLink: '',
    gameLink: '',
  },
 {
    title: 'The Cat Game?',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi harum voluptate amet molestiae odio nulla odit facere quibusdam quas.',
    blogLink: '',
    gameLink: '',
  },
];

const pages = () => {
  return (
    <div className="text-center min-h-screen">
      <div className={classNames('mb-11 p-5', styles.separator)}>
        <h1 className="text-2xl font-bold mt-11 mb-5">So many cool things for you to check out!</h1>
        <p className="max-w-[50ch] m-auto">Digital Sky Studios has developed many games over time. You can read about them them all and play them here.</p>
      </div>
      <div className="mb-10 mt-16 pt-10 px-5">
        {
          games.map((game: GameType, id: number) => {
            return (
              <div key={game.title} className={classNames({
                'flex justify-center gap-5 flex-wrap p-3 mb-12': true,
                'flex-row-reverse': id % 2 != 0
              })}>
                {!game.image ?
                  <div className="w-96 h-72 bg-red"></div> 
                  :
                  <Image
                    className='rounded-none object-cover'
                    src={game.image}
                    alt={`${game.title} picture`}
                    width={384} height={288}
                  />
                }
                <div className="flex flex-col md:text-left text-center justify-center p-7">
                  <h2 className='font-bold text-2xl my-4'>{game.title}</h2>
                  <p className="max-w-[40ch]">{game.description}</p>
                  <div className="flex gap-3 flex-wrap w-full justify-center md:justify-start">
                    <a
                      href={game.blogLink}
                      className="btn:inverted px-2 py-2 mt-5 w-[40%] text-center"
                      target='_blank' rel='noreferrer'
                    >Read More</a>
                    <a
                      href={game.gameLink}
                      className="btn:inverted px-2 py-2 mt-5 w-[40%] text-center"
                      target='_blank' rel='noreferrer'
                    >Play here</a>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default pages
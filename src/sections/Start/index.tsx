import { FC } from 'react';
import { Button } from '../../components';

export const Start: FC = () => {
  return (
    <section className="relative container px-[15px] pb-[72.5px]">
      <img className="absolute top-0 left-0 w-full z-[-1]" src="images/main.png" alt="start" />
      <h1 className="relative z-2 pt-[247px] text-[18px] font-medium leading-[17px] text-center text-white mb-[170px]">
        ЛЕДЯНАЯ КИНОЛЕНТА
      </h1>
      <div className={'grid grid-rows-[auto,1fr] grid-cols-2 gap-[8px] mb-[11px]'}>
        <a className='' href='#square-plan'>
          <Button variant={'big'} color={'red'}>
            ПЛАН ПЛОЩАДИ
          </Button>
        </a>

        <a className='' href='#retrospective'>
          <Button variant={'big'} color={'red'}>
            РЕТРО- СПЕКТИВА
          </Button>
        </a>
        <a className='col-span-2' href='#video'>
          <Button variant={'big'} color={'green'} className='w-full'>
            ВИДЕО
          </Button>
        </a>
      </div>
      <h2 className="text-white text-center font-roboto text-[14px] font-normal leading-[14px]">
        Кинематографическая ретроспектива, вдохновлённая историей Мосфильма
      </h2>
    </section>
  );
};

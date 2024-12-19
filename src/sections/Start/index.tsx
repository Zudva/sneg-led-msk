import { FC } from 'react';
import { Button } from '../../components';
import Logo from '../../icons/winter_snow_big.svg';

export const Start: FC = () => {
  return (
    <section className="relative bg-[url('/images/header_cover.png')] bg-center bg-cover bg-no-repeat container px-[15px] pb-[72.5px]">
      <Logo className="w-[220px] h-full pt-[86px] mx-auto mb-[15px]" />

      <h1 className="relative z-2  text-[18px] font-medium leading-[17px] text-center text-white mb-[170px]">
        ЛЕДЯНАЯ КИНОЛЕНТА
      </h1>
      <div className={'grid grid-rows-[auto,1fr] grid-cols-2 gap-[8px] mb-[11px] pt-[100px]'}>
        <a href="#square-plan">
          <Button className="w-full h-full" variant={'big'} color={'red'}>
            ПЛАН ПЛОЩАДИ
          </Button>
        </a>

        <a href="#retrospective">
          <Button className="w-full h-full" variant={'big'} color={'red'}>
            РЕТРО- СПЕКТИВА
          </Button>
        </a>
        <a className="col-span-2" href="#video">
          <Button variant={'big'} color={'green'} className="w-full">
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

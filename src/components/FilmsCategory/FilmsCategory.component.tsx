import { Button } from '../Button';
import { useState } from 'react';
import Modal from '../Modal';

type Props = {
  titleCategory: string;
  films: FilmFullModel[];
};

export const FilmsCategory = ({ titleCategory, films }: Props) => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(2); // Показываем сначала 2 фильма
  const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля раскрытия списка

  const [filmToShow, setFilmToShow] = useState('')
  const handleToggle = () => {
    if (isExpanded) {
      setVisibleFilmsCount(2);
    } else {
      setVisibleFilmsCount(films.length);
    }
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <section className="container px-[15px] pb-[28px] flex flex-col items-center justify-center last-of-type:pb-[60px]">
      <h2 className="max-w-[200px] uppercase text-center text-[18px] font-medium leading-[17px] mb-[28px]">
        {titleCategory}
      </h2>
      <ul className={'flex flex-wrap gap-[8px] gap-y-[16px] justify-center mb-[23px]'}>
        {films.slice(0, visibleFilmsCount).map(({ title, coverSrc, year, modalSrc, director, facts, quote }, index) => (
          <>
            <li key={index} className={'w-[48.5%]'} onClick={() => setFilmToShow(title)}>
              <figure className="flex flex-col gap-[8px] relative">
                <img src={coverSrc} alt={title} className="w-full h-[223px]" />
                <span className="absolute bottom-8 right-[9px] bg-[rgba(0,_0,_0,_0.85)] py-[1px] px-[8px] rounded-[2px] text-[11px] font-normal leading-[13px]">
                  {year}
                </span>
                <figcaption className="text-[14px] font-normal leading-[14px]">{title}</figcaption>
              </figure>
            </li>
            <Modal
              isOpen={filmToShow === title}
              onClose={() => setFilmToShow('')}
            >
              <section className='relative'>
                <img src={modalSrc} alt={title} className='w-full' />
                <h1 className='text-[11px] absolute left-[15px] bottom-[10px]'>«{title}» {year}</h1>
              </section>


              <section className='text-white bg-[#306F5E] h-full p-[15px]'>
                <p className='text-[18px]'><b>РЕЖИССËР:</b> {director}</p>

                <p className='text-[14px] my-[20px] p-[10px] bg-[#13544D] rounded-[7px] italic'>{quote}</p>

                <p className='capitalize text-[18px] font-bold mb-[9px]'>ИНТЕРЕСНЫЕ ФАКТЫ</p>
                <ul className='flex flex-col text-[14px] list-disc gap-[10px] ml-[15px]'>
                  {facts.map(f=> (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
            </Modal>
          </>
        ))}
      </ul>
      <Button variant={'small'} color={'red'} onClick={handleToggle}>
        {isExpanded ? 'свернуть' : 'ещё'}
      </Button>
    </section>
  );
};

import { Button } from '../Button';
import { useState } from 'react';

type Props = {
  titleCategory: string;
  films: FilmModel[];
};

export const FilmsCategory = ({ titleCategory, films }: Props) => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(2); // Показываем сначала 2 фильма
  const [isExpanded, setIsExpanded] = useState(false); // Состояние для контроля раскрытия списка

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
        {films.slice(0, visibleFilmsCount).map(({ title, coverSrc, year }, index) => (
          <li key={index} className={'w-[48.5%]'}>
            <figure className="flex flex-col gap-[8px] relative">
              <img src={coverSrc} alt={title} className="w-full h-[223px]" />
              <span className="absolute bottom-8 right-[9px] bg-[rgba(0,_0,_0,_0.85)] py-[1px] px-[8px] rounded-[2px] text-[11px] font-normal leading-[13px]">
                {year}
              </span>
              <figcaption className="text-[14px] font-normal leading-[14px]">{title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <Button variant={'small'} color={'red'} onClick={handleToggle}>
        {isExpanded ? 'свернуть' : 'ещё'}
      </Button>
    </section>
  );
};

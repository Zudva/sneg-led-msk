import { FilmsCategory } from '../../components';
import { retrospectivesData } from '../../utils/data.ts';

export const Retrospective = () => {
  return (
    <section id="retrospective" className='pt-[20px]'>
      {retrospectivesData.map(({ title, films }) => (
        <FilmsCategory titleCategory={title} films={films} />
      ))}
    </section>
  );
};

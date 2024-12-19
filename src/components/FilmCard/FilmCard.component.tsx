type Props = {
  title: string;
  modalSrc?: string;
  facts: string[];
  director: string;
  year: string;
  quote: string;
};

export const FilmCard = ({ title, modalSrc, facts, director, year, quote }: Props) => {
  return (
    <>
      <section className="relative">
        <img src={modalSrc} alt={title} className="w-full" />
        <h1 className="text-[11px] absolute left-[15px] bottom-[10px]">
          «{title}» {year}
        </h1>
      </section>

      <section className="text-white bg-[var(--light-green)] h-full p-[15px]">
        <p className="text-[18px]">
          <b>РЕЖИССËР:</b> {director}
        </p>

        <blockquote className="text-[14px] my-[20px] p-[10px] bg-[var(--middle-green)] rounded-[7px] italic">
          {quote}
        </blockquote>

        <p className="capitalize text-[18px] font-bold mb-[9px]">ИНТЕРЕСНЫЕ ФАКТЫ</p>
        <ul className="flex flex-col text-[14px] list-disc gap-[10px] ml-[15px]">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

type Props = {
  planBackgroundImage?: string;
  titleRight?: string;
  datesRight?: string;
  titleLeft?: string;
  datesLeft?: string;
  size?: 'big' | 'small';
};

export const PlanWithCategory = ({
  planBackgroundImage,
  titleLeft,
  datesLeft,
  titleRight,
  datesRight,
  size,
}: Props) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className={`relative z-1 w-[72%] ${size === 'big' ? 'h-[281px]' : 'h-[209px]'} flex flex-col justify-between ${planBackgroundImage} bg-cover bg-center bg-no-repeat py-[10px] px-[14px]  before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2 before:w-[30px] before:h-full ${size === 'big' ? "before:bg-[url('/images/decoration_big.svg')]" : "before:bg-[url('/images/decoration.svg')]"}  before:bg-no-repeat before:bg-contain before:bg-center after:absolute after:right-[-40px] after:top-1/2 after:-translate-y-1/2 after:w-[30px] after:h-full  ${size === 'big' ? "after:bg-[url('/images/decoration_big.svg')]" : "after:bg-[url('/images/decoration.svg')]"}  after:bg-contain after:bg-no-repeat  after:rotate-180`}
      >
        <div className="flex flex-col max-w-[161px] gap-[7px] text-right self-end">
          <h3 className="font-medium text-[18px] leading-[17px] uppercase">{titleRight}</h3>
          <span className="text-[14px] leading-[14px]">{datesRight}</span>
        </div>
        <div className="flex flex-col max-w-[161px] gap-[7px] self-start text-left">
          <h3 className="font-medium text-[18px] leading-[17px] uppercase">{titleLeft}</h3>
          <span className="text-[14px] leading-[14px]">{datesLeft}</span>
        </div>
      </div>
    </div>
  );
};

import LocationLogo from '../../icons/location_icon.svg';
import { PlanWithCategory } from '../../components';

export const SquarePlan = () => {
  return (
    <section id={'square-plan'} className="container px-[15px] pb-[40px] pt-[20px]">
      <h2 className="text-center text-[18px] font-medium leading-[17px] uppercase mb-[36px]">
        фестиваль
        <br />
        москва
      </h2>
      <div className="relative flex flex-col items-center gap-[6.5px] before:absolute before:bottom-[-36px] before:w-[65%] before:h-[5px] before:rounded-[15px] before:bg-white">
        <LocationLogo />
        <span className="text-[14px] font-normal leading-[14px]">вы тут</span>
      </div>
      <div className="mt-[78px]  mx-auto flex flex-col gap-[36px]">
        <PlanWithCategory
          planBackgroundImage={"bg-[url('/images/square_plan_1.svg')]"}
          titleRight={'Рождение мечты'}
          datesRight={'1930-е – 1940-е годы'}
          titleLeft={'Новая классика'}
          datesLeft={'2000-е – настоящее время'}
        />
        <PlanWithCategory
          size={'big'}
          planBackgroundImage={"bg-[url('/images/square_plan_2.svg')]"}
          titleRight={'Оттепель и лирика'}
          datesRight={'1950-е – начало 1960-х годов'}
          titleLeft={'Перестройка и новые горизонты'}
          datesLeft={'1986–1999 годы'}
        />
        <PlanWithCategory
          planBackgroundImage={"bg-[url('/images/square_plan_1.svg')]"}
          titleRight={'Рождение мечты'}
          datesRight={'1930-е – 1940-е годы'}
          titleLeft={'Новая классика'}
          datesLeft={'2000-е – настоящее время'}
        />
      </div>
    </section>
  );
};

import Image from 'next/image';
import { banner, wholeData } from '@/public/index';
import Line from '@/components/Line';
import { FadeIn, SlideIn, SlideLeft } from '@/motions/motion';

export default function Home() {
  return (
    <>
      <main className="sm:mx-6 flex items-center justify-center sm:my-[7.6875rem]">
        <SlideLeft
          as={'section'}
          className="sm:px-10 sm:pt-10 pb-10 bg-white max-w-[46rem] sm:rounded-3xl w-full"
        >
          <FadeIn className="relative sm:h-[18.75rem] h-[10.6875rem] mb-10">
            <Image
              src={banner}
              priority
              fill
              alt={'food image'}
              sizes="(min-width: 840px) 656px, (min-width: 640px) 80vw, 100vw"
              className="object-cover select-none rounded-xl"
            />
          </FadeIn>
          <div className="flex flex-col gap-8 max-sm:px-6">
            <div className="flex gap-6 flex-col">
              <SlideIn
                as={'h1'}
                shouldDelay={false}
                className="font-youngSerif text-darkCharcoal text-[2.5rem] leading-[100%] max-sm:text-[2rem] max-[304px]:text-[1.7rem]"
              >
                {wholeData.title}
              </SlideIn>
              <SlideIn
                as={'p'}
                shouldDelay={false}
                className="font-[400] leading-[150%] text-wengeBrown"
              >
                {wholeData.desc}
              </SlideIn>
            </div>
            {/** preparationTime */}
            <div className="flex flex-col rounded-lg bg-snow w-full gap-3 p-6">
              <SlideIn
                as={'h1'}
                shouldDelay={false}
                className="font-[600] text-[1.25rem] text-darkRaspberry"
              >
                {wholeData.preparationTime.title}
              </SlideIn>
              <ul className="flex flex-col gap-2">
                {wholeData.preparationTime.data.map((data, i) => (
                  <SlideIn
                    as={'li'}
                    shouldDelay={true}
                    key={i}
                    className="flex items-center gap-7 "
                    id="preparation Time"
                  >
                    <div className="w-1 h-1 rounded bg-darkRaspberry min-[300px]:ml-3"></div>
                    <label
                      htmlFor="preparation Time"
                      className="leading-[150%]"
                    >
                      <span className="font-bold text-wengeBrown">
                        {data.title}
                      </span>
                      : {data.duration}{' '}
                    </label>
                  </SlideIn>
                ))}
              </ul>
            </div>
            {/** ingredients */}

            <div className="flex flex-col gap-4 mt-[-0.2rem]">
              <SlideIn as={'h1'} shouldDelay={false} className="categoryTitle">
                {wholeData.ingredients.Title}
              </SlideIn>
              <ul className="flex flex-col gap-2 flex-cl=ol">
                {wholeData.ingredients.data.map((data, i) => (
                  <SlideIn
                    as={'li'}
                    shouldDelay={true}
                    key={i}
                    id="ingredients"
                    className="flex items-center gap-7"
                  >
                    <div className="w-1 h-1 rounded bg-darkRaspberry ml-2"></div>
                    <label htmlFor="ingredients">{data}</label>
                  </SlideIn>
                ))}
              </ul>
            </div>
            {/** line */}
            <Line />

            {/** instructions */}

            <div className="flex flex-col gap-4 mt-[-.5rem]">
              <SlideIn as={'h1'} shouldDelay={false} className="categoryTitle">
                {wholeData.instructions.title}
              </SlideIn>
              <ul className="flex flex-col gap-2 flex-cl=ol">
                {wholeData.instructions.data.map((data, i) => (
                  <SlideIn
                    as={'li'}
                    shouldDelay={true}
                    key={i}
                    id="ingredients"
                    className="flex items-start gap-5"
                  >
                    <label className=" text-darkRaspberry ml-2 font-bold leading-[150%]">
                      {i + 1}.
                    </label>
                    <label htmlFor="ingredients">
                      <span className="font-bold text-wengeBrown">
                        {data.steps}
                      </span>
                      : {data.manner}
                    </label>
                  </SlideIn>
                ))}
              </ul>
            </div>

            {/** line */}
            <Line />

            {/** Nutrition */}
            <div className="flex flex-col gap-4 mt-[-0.5rem]">
              <SlideIn as={'h1'} shouldDelay={false} className="categoryTitle">
                {wholeData.nutrition.title}
              </SlideIn>
              <SlideIn as={'p'} shouldDelay={true} className="">
                {wholeData.nutrition.paragraph}
              </SlideIn>
              <div className="flex flex-col gap-3 mt-[0.5rem]">
                {wholeData.nutrition.data.map((data, i) => (
                  <>
                    <SlideIn
                      as={'div'}
                      shouldDelay={true}
                      key={i}
                      className="flex px-8 max-[300px]:px-4 gap-4"
                    >
                      <label className="w-[50%]">{data.category}</label>
                      <label className="w-[50%] font-bold text-brandyRed">
                        {data.value}
                      </label>
                    </SlideIn>
                    {i !== 3 && <Line key={i+ Math.random() * 6 + 1} />}
                  </>
                ))}
              </div>
            </div>
          </div>
        </SlideLeft>
      </main>
    </>
  );
}

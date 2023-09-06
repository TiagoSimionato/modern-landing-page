//Images
import bannerImg1 from 'assets/images/banner-image1.png';
import bannerImg2 from 'assets/images/banner-image2.png';
//Components
import Input from 'components/Input';

export function Banner() {
  return (
    <section className='
      p-4
      pb-72p
      flex
      flex-col
      gap-4
      items-center

      md:px-[4.5vw]
      md:gap-0
      md:flex-row

      xl:px-[7vw]
      xl:gap-6
      xl:justify-center
    '>
      <div className='
        relative
        w-375p
        h-448p
        box-border

        md:order-2
        md:m-auto

        xl:w-[504px]
        xl:h-[692px]
      '>
        <img className='
          absolute
          left-18p
          top-6
          w-[172px]
          h-[336px]
          rounded-[75px]
          imgshadow

          md:left-0

          xl:w-[278px]
          xl:h-[542px]
          xl:rounded-[115px]
        ' src={bannerImg1} alt="Black Woman posing" />
        <img className='
          absolute
          right-18p
          top-28
          w-[172px]
          h-[336px]
          rounded-[75px]
          imgshadow

          md:right-0
          
          xl:w-[278px]
          xl:h-[542px]
          xl:top-[150px]
          xl:rounded-[115px]
        ' src={bannerImg2} alt="Asian Woman posing" />
      </div>
      <div className='
        flex
        flex-col
        gap-4
        items-center
        
        md:w-[44vw]

        xl:w-[604px]
        xl:gap-8
      '>
        <h2 className='
          font-medium
          text-40p/[48px]

          xl:text-[86px]/[100px]
        '>Lörem <span className='text-blue'>ipsum</span> sars rigisk.</h2>
        <p className='
          leading-8
          text-invblack
          capitalize
        '>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
        </p>
        <Input />
      </div>
    </section>
  );
}

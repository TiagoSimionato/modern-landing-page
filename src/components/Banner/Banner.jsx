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

      md:w-[340px]
      md:flex-wrap
      md:h-[554px]
      md:px-8

      xl:w-fit
      xl:max-w-[804px]
      xl:h-fit
      xl:min-h-[802px]
      xl:px-[100px]
      xl:gap-6
      xl:justify-center
    '>
      <div className='
        relative
        w-375p
        h-448p
        box-border

        md:order-2
        md:mr-0
        md:absolute
        md:right-8
        md:w-[344px]

        xl:w-[504px]
        xl:h-[692px]
      '>
        <img className='
          absolute
          left-18p
          top-6
          w-[172px]
          h-[336px]

          md:left-0

          xl:w-[278px]
          xl:h-[542px]
          xl:imgshadow
        ' src={bannerImg1} alt="Black Woman posing" />
        <img className='
          absolute
          right-18p
          top-28
          w-[172px]
          h-[336px]

          md:right-0
          
          xl:w-[278px]
          xl:h-[542px]
          xl:top-[150px]
          xl:imgshadow
        ' src={bannerImg2} alt="Asian Woman posing" />
      </div>
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
    </section>
  );
}

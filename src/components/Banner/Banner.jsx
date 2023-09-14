//Images
import bannerImg1 from 'assets/images/banner-image1.png';
import bannerImg2 from 'assets/images/banner-image2.png';
//Components
import Input from 'components/Input';

export function Banner() {
  return (
    <section className='
      px-4
      pt-6
      pb-72p
      flex
      flex-col
      items-center

      md:py-[64px]
      md:px-[4.1667vw]
      md:flex-row

      xl:px-[6.95vw]
      xl:justify-center
    '>
      <div className='
        relative
        w-375p
        h-[429px]
        box-border

        md:order-2
        md:m-auto

        xl:w-[504px]
        xl:h-[692px]
        xl:mr-0
      '>
        <img className='
          absolute
          left-18p
          top-0
          w-[172px]
          h-[336px]
          rounded-[74px]
          imgshadow

          md:left-0

          xl:w-[278px]
          xl:h-[542px]
          xl:rounded-[119.5px]
          xl:imgshadowxl
        ' src={bannerImg1} alt="Black Woman posing" />
        <img className='
          absolute
          right-18p
          top-[93px]
          w-[172px]
          h-[336px]
          rounded-[74px]
          imgshadow

          md:right-0
          
          xl:w-[278px]
          xl:h-[542px]
          xl:top-[150px]
          xl:rounded-[119.5px]
          xl:imgshadowxl
        ' src={bannerImg2} alt="Asian Woman posing" />
      </div>
      <div className='
        flex
        flex-col
        items-left
        mt-8
        
        md:w-[44vw]

        xl:w-[604px]
      '>
        <h2 className='
          font-medium
          text-40p/[48px]
          w-[281px]

          xl:text-[86px]/[100px]
          xl:w-[604px]
          xl:capitalize
        '>Lörem <span className='text-blue'>ipsum</span> sars rigisk.</h2>
        <p className='
          leading-8
          text-invblack
          capitalize
          w-[320px]
          mt-3
          mb-6

          xl:w-[604px]
          xl:mt-6
          xl:mb-8
        '>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
        </p>
        <Input />
      </div>
    </section>
  );
}

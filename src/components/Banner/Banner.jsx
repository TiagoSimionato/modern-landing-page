//Images
import bannerImg1 from 'assets/images/banner-image1.png';
import bannerImg2 from 'assets/images/banner-image2.png';
//Components
import Input from 'components/Input';

export function Banner() {
  return (
    <div className='p-4 flex flex-col gap-4'>
      <div className='relative w-375 h-540 box-border'>
        <img className='absolute' src={bannerImg1} alt="TODO" />
        <img className='absolute right-0 top-100' src={bannerImg2} alt="TODO" />
      </div>
      <h2 className='font-bold text-4xl'>Lörem <span className='text-blue'>ipsum</span> sars rigisk.</h2>
      <p className='leading-8 text-invblack capitalize'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
      </p>
      <Input />
    </div>
  );
}

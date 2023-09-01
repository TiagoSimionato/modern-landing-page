//Images
import bannerImg1 from 'assets/images/banner-image1.png';
import bannerImg2 from 'assets/images/banner-image2.png';
//Components
import Input from 'components/Input';

export function Banner() {
  return (
    <section className='p-4 pb-72p flex flex-col gap-4 items-center'>
      <div className='relative w-375p h-448p box-border'>
        <img className='absolute left-18p top-6' src={bannerImg1} alt="Black Woman posing" />
        <img className='absolute right-18p top-28' src={bannerImg2} alt="Asian Woman posing" />
      </div>
      <h2 className='font-medium text-40p/[48px]'>Lörem <span className='text-blue'>ipsum</span> sars rigisk.</h2>
      <p className='leading-8 text-invblack capitalize'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
      </p>
      <Input />
    </section>
  );
}

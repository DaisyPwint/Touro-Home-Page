import HeroImg from '../../assets/hero-img.png'  
import SearchBox from './components/SearchBox'

export default function HeroSection() {
  return (
    <section className='flex flex-col justify-center relative'>
       <div className='flex md:flex-row sm:flex-col-reverse text-center gap-4'>
        <div className='md:basis-1/2 md:block hidden md:text-left md:mt-20'>
          <h1 className='text-3xl md:text-5xl md:leading-snug tracking-wider font-semibold md:text-gray-800 md:w-[250px] max-w-full'>Explore Beautiful World!</h1>
        </div>
        <div className='md:basis-1/2'>
          <img src={HeroImg} alt="hero image" className='h-[500px] w-full object-cover'/>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 md:top-3/4 md:left-0 md:-translate-x-0 md:-translate-y-2/4'>
          <SearchBox/>
        </div>
      </div>
    </section>
  )
}

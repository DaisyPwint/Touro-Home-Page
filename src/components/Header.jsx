import { useState,useEffect } from 'react';
import Logo from '../assets/logo.avif';
import MaterialOutlined from './MaterialOutlined';

const navigation = ['Home','Category','Blog','About Us']

export default function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const [isMobile,setIsMobile] = useState(
    window.matchMedia('(max-width: 767px)').matches
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <nav className='sticky top-0 z-20 bg-white'>
        <div className='max-w-5xl mx-auto w-11/12'>
            <div className='flex items-center justify-between py-4'>
                <div className="hidden md:flex items-center gap-3">
                    <img src={Logo} alt="logo img" width={80} height={80}/> 
                    <h1 className='text-xl font-bold cursor-pointer'>Touro</h1>
                </div>
                <ul className='hidden md:flex md:gap-x-6'>
                    {
                        navigation.map((nav,index) => (
                            <li key={index} className="font-medium"><a href="#" className='hover:border-b-[3px] border-transparent hover:border-primary transition duration-300 ease-in-out'>{nav}</a></li>
                        ))
                    }
                </ul>
                <button className='inline-block px-10 py-2 border border-primary bg-primary text-white rounded-xl'>Login</button>
                {
                    (isMobile && !isMenuOpen) && (
                        <button className='inline-flex items-center justify-center rounded-md p-1 hover:bg-slate-400 ease-in duration-300 hover:text-white' onClick={() => setIsMenuOpen(true)} >
                        <MaterialOutlined>menu</MaterialOutlined>
                    </button>
                    )
                }
                {
                    (isMobile && isMenuOpen) && (
                        <div className='fixed top-0 right-0 bg-white/50 w-full h-screen backdrop-blur-md transition-opacity duration-300 delay-100'>
                            <button className='absolute top-[1.3rem] right-6 ml-2 inline-flex items-center justify-center rounded-md p-1 hover:bg-slate-400 ease-in duration-300 hover:text-white' onKeyDown={() => setIsMenuOpen(false)} onClick={() => setIsMenuOpen(false)}>
                                <MaterialOutlined>close</MaterialOutlined>
                            </button>
                            <ul className='flex flex-col justify-center items-center gap-6 mt-[20%]'>
                                {
                                    navigation.map((nav,index) => (
                                        <li key={index} className="font-medium"><a href="#" className='hover:border-b-[3px] border-transparent hover:border-primary transition duration-300 ease-in-out'>{nav}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    </nav>
  )
}

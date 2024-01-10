import Logo from '../assets/logo.avif';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MaterialOutlined from './MaterialOutlined';

const socialMediaLinks = [
  { url: 'https://www.facebook.com/your-facebook-page', icon: <FaFacebook size={25} /> },
  { url: 'https://twitter.com/your-twitter-account', icon: <FaTwitter size={25} /> },
  { url: 'https://www.instagram.com/your-instagram-account', icon: <FaInstagram size={25} /> },
  { url: 'https://www.linkedin.com/in/your-linkedin-profile', icon: <FaLinkedin size={25} /> },
];

const quickLinks = [
  'Home',
  'Category',
  'Blog',
  'About Us',
];

const additionalLinks = [
  'FAQ\'s',
  'Privacy Policy',
  'Term & Conditions',
  'Support',
];

const contactDetails = [
  { icon: 'location_on', text: '342 Blane Street, Wisconsin, United States' },
  { icon: 'call', text: '2145 - 5467 - 5348' },
  { icon: 'mail', text: 'touro@agency.com' },
];

export default function Footer() {
  return (
    <footer className='max-w-5xl mx-auto mt-24 w-11/12 text-sm'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-9 justify-center border-b-2 border-gray-200 pb-16'>
        <div>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo img" width={80} height={80}/> 
            <h1 className='text-xl font-bold cursor-pointer'>Touro</h1>
          </div>
          <p className='my-6'>Travel is total to prejudice, and narrow mindedness.And many of our people.</p>
          <div className='flex flex-wrap gap-5 text-gray-400'>
            {
              socialMediaLinks.map((link,index) => (
                <a key={index} className='hover:text-primary' href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))
            }
          </div>
        </div>
        {
          [quickLinks,additionalLinks].map((links,index) => (
            <div key={index}>
              <div className='h-[60px] flex flex-col justify-center'>
                <h1 className='text-lg font-bold'>Quick Link</h1>            
              </div>
              <div className='flex flex-col gap-3'>
                  {
                    links.map((link,index) => (
                      <a key={index} href="#">{link}</a>
                    ))
                  }
              </div>
            </div>
          ))
        }
        <div>
          <div className='h-[60px] flex flex-col justify-center'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
          </div>
          <div className='flex flex-col gap-3'>
            {contactDetails.map(({ icon, text }, index) => (
              <div key={index} className='flex gap-2'>
                <MaterialOutlined className="text-primary">{icon}</MaterialOutlined>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='py-10'>
        <p className='text-center'>Copyright &copy; <a href="#" className='text-primary'>touro@agency</a>.com by nasir jamshed</p>
      </div>
    </footer>
  )
}
 
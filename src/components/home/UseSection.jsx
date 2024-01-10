import forbesLogo from '../../assets/logos/forbes.png';
import businessInsiderLogo from '../../assets/logos/business-insider.png';
import techCrunchLogo from '../../assets/logos/techcrunch.png';
import newYorkTimesLogo from '../../assets/logos/the-new-york-times.png';
import usaTodayLogo from '../../assets/logos/usa-today.png';

const logos = [
  { src: forbesLogo, alt: 'Forbes' },
  { src: businessInsiderLogo, alt: 'Business Insider' },
  { src: techCrunchLogo, alt: 'TechCrunch' },
  { src: newYorkTimesLogo, alt: 'The New York Times' },
  { src: usaTodayLogo, alt: 'USA Today' },
];

export default function UseSection() {
  return (
    <section className="flex flex-wrap justify-between items-center md:gap-10 gap-5 lg:pt-36 md:pt-32 pt-28">
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={`${logo.alt} img`} className='md:h-[1.5rem] h-[1.2rem] filter brightness-0 opacity-50' />
      ))}
    </section>
  )
}

import { ContactSection, ExploreSection, GallerySection, HeroSection, PopularSection, UseSection } from "../components"

export default function Home() {
  return (
    <main className='max-w-5xl mx-auto w-11/12'>
      <HeroSection/>
      <PopularSection/>
      <ExploreSection/>
      <GallerySection/>
      <UseSection/>
      <ContactSection/>
    </main>
  )
}

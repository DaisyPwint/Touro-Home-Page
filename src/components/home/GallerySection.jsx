import Title from "../Title";

export default function GallerySection() {

    const galleryItems = [
    { imageSrc: 'https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1110.jpg?size=626&ext=jpg&ga=GA1.2.626863243.1702211119&semt=sph', styleClass: 'md:h-[400px] sm:h-[250px] h-[200px]' },
    { imageSrc: 'https://img.freepik.com/free-photo/maldives-island_74190-2340.jpg?size=626&ext=jpg&ga=GA1.1.626863243.1702211119&semt=sph', styleClass: 'md:h-[250px] sm:h-[150px] h-[100px]'},
    { imageSrc: 'https://img.freepik.com/free-photo/woman-hand-holding-camera-standing-top-rock-nature-travel-concept_335224-887.jpg?size=626&ext=jpg&ga=GA1.2.626863243.1702211119&semt=sph', styleClass: 'md:h-[250px] sm:h-[150px] h-[100px]'},
    { imageSrc: 'https://img.freepik.com/free-photo/group-man-woman-enjoy-camping-picnic-barbecue-lake-with-tents-background-young-mixed-race-asian-woman-man-young-people-s-hands-toasting-cheering-bottles-beer_1253-1041.jpg?size=626&ext=jpg&ga=GA1.1.626863243.1702211119&semt=sph', styleClass: 'md:h-[400px] sm:h-[250px] h-[200px]'},
    { imageSrc: 'https://img.freepik.com/free-photo/traveler-asian-woman-traveling-walking-bangkok-thailand_7861-1292.jpg?size=626&ext=jpg&ga=GA1.2.626863243.1702211119&semt=sph', styleClass: 'md:h-[400px] sm:h-[250px] h-[200px]'},
    { imageSrc: 'https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?size=626&ext=jpg&ga=GA1.2.626863243.1702211119&semt=sph', styleClass: 'md:h-[250px] sm:h-[150px] h-[100px]'},
  ];

  return (
    <section className="lg:pt-36 md:pt-32 pt-28">
      <div className="flex flex-col md:flex-row justify-between">
          <div className="flex md:flex-row flex-col">
            <Title titleName="Our Gallery" />
            <p className="md:self-end self-center md:ml-2">Share Your Happy Moment</p>
          </div>
          <button className="text-primary text-base font-medium self-end">View all</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-16">

        <div className="flex flex-col gap-4">
            <GalleryItem img={galleryItems[0]}/>
            <GalleryItem img={galleryItems[1]}/>
        </div>
        <div className="flex flex-col gap-4">
            <GalleryItem img={galleryItems[2]}/>
            <GalleryItem img={galleryItems[3]}/>
        </div>
        <div className="flex flex-col gap-4">
            <GalleryItem img={galleryItems[4]}/>
            <GalleryItem img={galleryItems[5]}/>
        </div>
      </div>
    </section>
  )
}

const GalleryItem = ({ img }) => {
  const {imageSrc,styleClass} = img;

  return (
  
    <div className="flex flex-col gap-4">
      <div className={styleClass}>
        <img className="block h-full w-full rounded-lg object-cover object-center" src={imageSrc} alt="gallery img" />
      </div>
    </div>
  );
}

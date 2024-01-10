import React from "react"
import CardItem from "./components/CardItem"
import OverviewCard from "./components/OverviewCard"
import beachData from "../../data/places"
import Title from '../Title'

const categories = ["Beach","Mountain","Waterfall","IceBergs","View all"]

export default function ExploreSection() {
  return (  
    <section className="lg:pt-36 md:pt-32 pt-28">
      <div className="flex flex-col md:flex-row justify-between">
        <Title titleName="Explore Place" />
        <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 justify-center md:self-end self-center">
          {
            categories.map((category,index) => (
              <li key={index} className="sm:text-base text-sm font-medium">
                <a href="#" className="hover:border-b-[3px] border-transparent hover:border-primary transition duration-300 ease-in-out">{category}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
      {
        beachData.map((beach,index) => (
              <React.Fragment key={index} >
                <CardItem {...beach}/>
              </React.Fragment>
              )
            )
          }
      </div>
      <OverviewCard/>
    </section>
  )
}

import React from 'react';
import MaterialOutlined from '../MaterialOutlined';
import ReviewImg from '../../assets/review-img.avif';
import { FaStar } from 'react-icons/fa';
import Title from '../Title';
import Customer1 from '../../assets/customers/customer-1.jpg';
import Customer2 from '../../assets/customers/customer-2.jpg';
import Customer3 from '../../assets/customers/customer-3.jpg';
import Customer4 from '../../assets/customers/customer-4.jpg';
import Customer5 from '../../assets/customers/customer-5.jpg';

export default function ReviewSection() {
  return (
    <section className='flex md:flex-row flex-col md:items-start items-center gap-10 lg:pt-36 md:pt-32 pt-28'>
      <div className='md:w-1/2 w-full relative'>
        <img src={ReviewImg} alt="Review Image" className='w-full pt-[50px]'/>
        <CustomerImageList />
        <CustomerReview />
      </div>
      <div className='md:w-1/2 w-full'>
        <div className='md:w-80 w-full'>
          <Title titleName="Explore all corners of The world with us" />
        </div>
        <p className='my-8 leading-6'>Travel is total to prejudice, and narrow mindedness, 
        And many of our people need it safety on these accounts.
        And many of our people need it sorely.</p>
        <div className="grid md:grid-cols-2 sm:grid-cols-4 grid-cols-2 gap-6">
          <FeatureItem icon="public" title="Flight" />
          <FeatureItem icon="bedroom_parent" title="Hotel" />
          <FeatureItem icon="wifi" title="Wifi" />
          <FeatureItem icon="restaurant" title="Food" />
        </div>
      </div>
    </section>
  );
}


const CustomerImageList = () => (
  <div className='absolute top-1 w-52 bg-white rounded-md shadow-md flex p-3'>
    {[Customer1, Customer2, Customer3, Customer4, Customer5].map((customer, index) => (
      <img key={index} src={customer} alt={`customer-${index + 1}`} className='w-12 h-12 rounded-full -mr-4' />
    ))}
  </div>
);

const CustomerReview = () => (
  <div className='absolute bottom-3 right-0 w-72 bg-white rounded-md shadow-md flex justify-between p-3 gap-2'>
    <img src={Customer1} alt="customer image" className='w-12 h-12 rounded-full -mr-4' />
    <div className='flex flex-col'>
      <p>World of the best agency</p>
      <div className='flex gap-1'>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className='text-primary' />
        ))}
      </div>
    </div>
  </div>
);

const FeatureItem = ({ icon, title }) => (
  <div className='flex gap-2 items-center'>
    <div className='bg-white flex p-3 rounded-md shadow-md'>
      <MaterialOutlined className={`text-primary`}>{icon}</MaterialOutlined>
    </div>
    <p className='font-semibold ml-2'>{title}</p>
  </div>
);
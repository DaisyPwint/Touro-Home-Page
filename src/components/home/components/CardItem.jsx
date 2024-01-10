import MaterialOutlined from '../../MaterialOutlined';
import { FaStar } from 'react-icons/fa';

export default function CardItem({imageSrc, title, location, rating}){
  return (
  <div className='bg-white p-4 rounded-2xl shadow-lg'>
    <img src={imageSrc} alt="beach image" className='rounded-2xl w-full !h-52' />
    <div className='flex flex-wrap mt-4 justify-between items-center'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <div className='flex justify-between items-center gap-1 text-primary'>
        <FaStar className='text-primary' />
        {rating}
      </div>
    </div>
    <div className='flex items-center gap-1 mt-3'>
      <MaterialOutlined className="text-blue-400 text-[19px]">location_on</MaterialOutlined>
      <p className='text-sm'>{location}</p>
    </div>
  </div>
);
}
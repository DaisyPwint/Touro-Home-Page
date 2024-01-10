import { useState } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const options = [
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Myanmar', label: 'Myanmar' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Bangkok', label: 'Bangkok' },
  ];

const customStyles = {
    control: (defaultStyles) => ({
        ...defaultStyles,
        border: "none",
        cursor: "pointer",
        boxShadow: "#fff"
      }),
    valueContainer: (defaultStyles) => ({
    ...defaultStyles,
    padding: "0px 8px 0px 0px"
    }),
    dropdownIndicator: (defaultStyles) => ({
      ...defaultStyles,
      color: "#3b82f6"
      }),
    indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none"
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#030712" }),
}

const MIN = 0;
const MAX = 1000;

export default function SearchBox() {
    const [selectedOption,setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());  
    const [openRange, setOpenRange] = useState(false);
    const [values, setValues] = useState([MIN,MAX]);
  
    const handleOnChange= (selected) => {
      setSelectedOption(selected);
    }
    
    return (
      <div className="bg-white rounded-xl shadow-md">
          <div className="flex md:flex-row flex-col md:items-center gap-3 md:h-24 md:w-full w-80">
            <LocationSelect handleOnChange={handleOnChange} />
            <DateSelector startDate={startDate} setStartDate={setStartDate} />
            <PriceRangeSelector openRange={openRange} setOpenRange={setOpenRange} values={values} setValues={setValues} />
            <SearchButton />
          </div>        
      </div>
    )
  }

  const LocationSelect = ({ handleOnChange }) => (
    <div className="md:w-[150px] md:px-0 md:pt-0 px-4 pt-2 w-full md:ml-5 md:border-r-2 border-r-slate-300 flex flex-row md:flex-col md:items-start items-center justify-between">
      <p className="text-blue-500 text-sm md:mb-1 font-medium">Located in</p>
      <Select
        onChange={handleOnChange}
        options={options}
        placeholder="Destination"
        styles={customStyles}
      />
    </div>
  );
  
  const DateSelector = ({ startDate, setStartDate }) => (
    <div className="md:w-[150px] md:px-0 px-4 w-full md:border-r-2 border-r-slate-300 flex flex-row md:flex-col md:items-start items-center justify-between">
      <p className="text-blue-500 text-sm md:mb-1 font-medium">Date</p>
      <div className='flex justify-between items-center w-32 md:w-[8.5rem]'>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="eee,d MMM"
          minDate={new Date()}
          className='w-30 cursor-pointer'
        />
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg text-blue-500 mr-2">
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>
    </div>
  );
  
  const PriceRangeSelector = ({ openRange, setOpenRange, values, setValues }) => (
    <div className='relative md:w-[150px] md:px-0 px-4 flex flex-row md:flex-col md:items-start justify-between items-center cursor-pointer'>
      <p className="text-blue-500 text-sm md:mb-1 font-medium">Price Range</p>
      <div className='flex justify-between items-center' onClick={() => setOpenRange(!openRange)}>
        <span className=' text-gray-950 md:w-24 w-32 p-[6px] ps-0'>${values[0]} - ${values[1]}</span>
        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg text-blue-500 flex-1 mr-2">
          <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
      </div>
      {openRange && (
        <div className='absolute md:-bottom-20 -bottom-16 md:right-2 right-6 border border-blue-400 max-w-60 w-full h-16 flex justify-center items-center p-4 bg-white rounded-md shadow-md'>
          <Slider range min={MIN} max={MAX} onChange={setValues} />
        </div>
      )}
    </div>
  );
  
  const SearchButton = () => (
    <div className='md:w-[150px]'>
      <button className='bg-blue-400 text-white w-full h-16 md:h-24 md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-none rounded-bl-xl rounded-br-xl'>Search</button>
    </div>
  );
  


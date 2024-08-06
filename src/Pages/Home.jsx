import React from 'react';
import Caraseoul from '../Components/Caraseoul';
import FlipCard from '../Components/FlipCard';

const Home = () => {
  return (
    <div className='mt-20'>
    <Caraseoul/>
    {/* <FlipCard/> */}
    </div>
    // <div className="relative w-full h-screen overflow-hidden">
    //   <img 
    //     src={gatewayofindia} 
    //     alt="Gateway of India"
    //     className="absolute inset-0 object-cover w-[70%] h-[70%] mx-auto my-auto"
    //   />
    // </div>
  );
};

export default Home;

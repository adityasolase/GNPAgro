import React from 'react';
 import './Home.css'; 
import SlideShow from '../components/SlideShow';
import useClock from '../hooks/useClock';

const Home = () => {
  const time = useClock();

  return (
    <div className="home">
      <SlideShow />
      <div className="time-watch">
        <p>Current Time: {time}</p>
      </div>
    </div>
  );
};

export default Home;

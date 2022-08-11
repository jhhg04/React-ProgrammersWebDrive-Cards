import React from 'react';
import '../index.css';

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className='card' key={index}>
          <div className='card-img'>
            <img src={value.image} />
          </div>
          <div>
            <p className='card-title'>{value.title}</p>
            <p className='card-description'>{value.subheading}</p>
            <p className='card-description'>{value.date}</p>
            <div className='container'>
              <button className='btn-read'>Read More</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

import React from 'react';
import '../index.css';
import 'moment';
import Moment from 'react-moment';

const Card = ({ index, value }) => {
  return (
    <div className='card' key={index}>
      <div className='card-img'>
        <img src={value.image} />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{value.title}</h2>
        <p className='card-description'>{value.subheading}</p>
        <p className='card-description'>
          <Moment date={value.date} format='' />
        </p>
        <button className='btn-read'>Read More</button>
      </div>
    </div>
  );
};

export default Card;

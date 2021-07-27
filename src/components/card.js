import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaQuoteRight } from 'react-icons/fa'
import './card.css';
import reviews from '../data'

function Card() {
  const [ index, setIndex ] = useState(0);
  const { name, job, text, id, image } = reviews[index];
  
  const nextPerson = ()=>{
    setIndex( index + 1 );
    if (index===reviews.length - 1){
      setIndex(0);
    }
  }

  const prevPerson = ()=>{
    setIndex( index - 1 );
    if (index===0){
      setIndex(reviews.length-1);
    }
  }

  const randomPerson = ()=>{
    setIndex(Math.floor((Math.random() * 4) + 0));
  }

  return (
    <section> 
      <div key={id} className="card">
        <div className="image-box">
          <FaQuoteRight className="quote"/>
          <img src={ image } alt={ name }/>
        </div>
        <div className="profile-info">
          <h4>{ name }</h4>
          <h5>{ job }</h5>
        </div>
        <div className="text-info">
          <p>{ text }</p>
        </div>
        <div className="buttons">
          <span className="btns" onClick={prevPerson}><BiChevronLeft/></span>
          <span className="btns" onClick={nextPerson}><BiChevronRight/></span>
          <button className="btn" onClick={randomPerson}>Surprise Me</button>
        </div>
      </div>
    </section>
  )
}

export default Card;
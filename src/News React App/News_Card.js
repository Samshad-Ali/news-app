import React from 'react'
import { FaArrowRight} from "react-icons/fa";
import './News_Card.css'
const News_Card = ({data}) => {

  // let date = new Date();

  return (
      <div className='card'>
          <img src={data.urlToImage} alt={data.title} />
      <div className="info">
      <h4>{data.title}</h4>
      <p> {data.description} </p>
      {/* <h3>{date}</h3> */}
    </div>
      <button onClick={(e)=>{window.open(data.url)}} className='button'>Read More <FaArrowRight/> </button>
  
      </div>
  )
}

export default News_Card;
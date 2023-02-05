import React from 'react'
import { FaArrowRight} from "react-icons/fa";
import './News_Card.css'
const News_Card = ({data}) => {

  // let date = new Date();

  return (
      <div className='card'>
          <img src={data.urlToImage ? data.urlToImage: 'https://media.istockphoto.com/id/147036034/photo/crisis-in-news.jpg?s=612x612&w=0&k=20&c=q5f6qs-Cq1JLhM-xMpCj6rsJoIVceowpDahQDb6vvVI='} alt={data.title} />
      <div className="info">
      <h4>{data.title?data.title:'the best news api is News api'}</h4>
      <p> {data.description?data.description:'lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni cumque cum blanditiis vel id aperiam ipsum, saepe similique sit? Consequuntur nemo quae magnam eius tenetur. Ipsum facere repudiandae commodi amet.'} </p>
    </div>
      <button onClick={(e)=>{window.open(data.url)}} className='button'>Read More <FaArrowRight/> </button>
   
      </div>
  )
}

export default News_Card;
import React, { useEffect, useRef, useState } from "react";
import News_Card from "./News_Card";
import "./News_Card.css";

const News_App = () => {
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("tesla");
  const [info, setInfo] = useState("India");
  const queryDataref = useRef(null);
 const [input,setInput]=useState('')
  const apiKey = "ef5b66227eac4ea68f6b04522c4ca1d6";
  const apiURL = `  https://newsapi.org/v2/everything?q=${query}&from=2022-12-12&sortBy=publishedAt&apiKey=ef5b66227eac4ea68f6b04522c4ca1d6
  `;

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiURL);
      const Data = await response.json();
      setNewsList(Data.articles);
    } catch (error) {
      console.log("error occured", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input);
    setInput('')
  }

  function handleBtn(e) {
    setQuery(info);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Daily News 📰 </h1>
        <div className="search-box">
          <input
            type="text"
            onChange={(e) => { setInput(e.target.value) }}
            value={input}
            placeholder="Search the news here"
            className="search"
          />
          <button onClick={handleSubmit} className="btn">
            {" "}
            Search
          </button>
        </div>
      </form>

      <div className="trending-topics">
        <h2>Trending Topics</h2>
        <div className="particular-btn">
          <button onClick={handleBtn}>India</button>
          <button
            onClick={() => {
              setQuery("Share Market");
            }}
          >
            Share Market
          </button>
          <button
            onClick={() => {
              setQuery("Elon Musk");
            }}
          >
            Elon Musk
          </button>
          <button
            onClick={() => {
              setQuery("Bollywood");
            }}
          >
            Bollywood
          </button>
          <button
            onClick={() => {
              setQuery("Science");
            }}
          >
            Science
          </button>
        </div>
      </div>

      <div className="box">
        {newsList.map((news, id) => {
          return <News_Card data={news} key={id} />;
        })}
      </div>
    </div>
  );
};

export default News_App;


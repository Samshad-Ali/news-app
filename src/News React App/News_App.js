import React, { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import News_Card from "./News_Card";
import "./News_Card.css";

const News_App = () => {
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("tesla");
  const [loading, setLoding] = useState(false);
  const [input, setInput] = useState("");
  const apiKey = "2af1db7184314a2e87176a0a0c6e37be";
  const apiURL = ` https://newsapi.org/v2/everything?q=${query}&from=2022-12-13&sortBy=publishedAt&apiKey=2af1db7184314a2e87176a0a0c6e37be&page=${page}&pageSize=9
  `;

  useEffect(() => {
    fetchData();
  }, [query,page]);

  async function fetchData() {
    try {
      setLoding(true);
      const response = await fetch(apiURL);
      const Data = await response.json();
      setLoding(false);
      setNewsList(Data.articles);
    } catch (error) {
      console.log("error occured", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input);
    setInput("");
  }

  const handlePreBtn = () => {
    setPage(page-1)
  };
  const handleNexBtn = () => {

    setPage(page+1);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>ताजा खबर 📰 </h1>
        <div className="search-box">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
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
          <button
            onClick={() => {
              setQuery("India");
            }}
          >
            India
          </button>
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
        {loading ? (
          <div className="loading">
            {" "}
            <Loading />{" "}
          </div>
        ) : (
          newsList.map((news, id) => {
            return <News_Card data={news} key={id} />;
          })
        )}
      </div>
      <div className="last-btn">
        <button disabled={page<=1?true:false} onClick={handlePreBtn}> <i className="fa-solid fa-caret-left"></i>  Prev</button>
        <button onClick={handleNexBtn}>Next <i className="fa-solid fa-caret-right"></i></button>
      </div>
    </div>
  );
};

export default News_App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function NewsBitcoin() {
  const key = process.env.REACT_APP_API_KEY;

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`
        );
        console.log(response);
        setNews(response.data.articles);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getNews();
  }, []); // Boş bağımlılık dizisi ile sadece bir kere çalışmasını sağlayın

  const limitContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    } else {
      return content;
    }
  };
  return (
    <div className="container">
      {news.map((item, index) => (
        <div key={index} className="news-box">
          <img className="news-image" src={item.urlToImage} alt="" />
          <h1 className="news-title">{item.title}</h1>
          <p className="news-author">{item.author}</p>
          <p className="news-content">{limitContent(item.content, 150)}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsBitcoin;

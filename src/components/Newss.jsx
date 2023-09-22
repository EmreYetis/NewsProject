import React, { useState, useEffect } from "react";
import axios from "axios";
import "./newss.css"; // CSS dosyasını içe aktarın

function Newss() {
  const key = "";
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`
        );
        console.log(response);
        setNews(response.data.articles);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    getNews();
  }, []); // Boş bağımlılık dizisi ile sadece bir kere çalışmasını sağlayın

  return (
    <div className="container">
      {news.map((item, index) => (
        <div key={index} className="news-box">
          <img className="news-image" src={item.urlToImage} alt="" />
          <h1 className="news-title">{item.title}</h1>
          <p className="news-author">{item.author}</p>
          <p className="news-content">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Newss;

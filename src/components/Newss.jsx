import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap"; // react-bootstrap'dan Carousel bileşenini içe aktarın
import "./newss.css"; // CSS dosyasını içe aktarın

function Newss() {
  const key = process.env.REACT_APP_API_KEY;

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

  const limitContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  // Slider için yeni state'ler ekleyin
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {news.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="news-image" src={item.urlToImage} alt="" />
            <Carousel.Caption>
              <h1 className="news-title">{item.title}</h1>
              <p className="news-author">{item.author}</p>
              <p className="news-content">{limitContent(item.content, 150)}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Newss;

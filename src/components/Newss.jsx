import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel için stil dosyasını içe aktarın
import { Carousel } from "react-responsive-carousel"; // Carousel bileşenini içe aktarın
import { LazyLoadImage } from "react-lazy-load-image-component";

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

  return (
    <div className="container m-auto">
      <Carousel
        showIndicators={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        className="mt-6 max-w-4xl mx-auto" // Carousel bileşenine üst boşluk ekleyin
      >
        {news.map((item, index) => (
          <div key={index} className="news-box border p-4 rounded-lg shadow-md">
            <LazyLoadImage
              className="news-image max-w-full h-auto"
              src={item.urlToImage}
              alt=""
            />
            <h1 className="news-title text-xl font-bold mt-4">{item.title}</h1>
            <p className="news-author text-base text-gray-500">{item.author}</p>
            <p className="news-content text-base font-semibold mt-2">
              {limitContent(item.content, 150)}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Newss;

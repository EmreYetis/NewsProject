import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Entertainment() {
  const key = process.env.REACT_APP_API_KEY;

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${key}`
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
    if (content !== null && content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  return (
    <div className="flex flex-wrap justify-around w-3/4 m-auto">
      {news.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 p-5 m-8 w-72 text-center rounded-lg shadow-md flex flex-col"
        >
          <h1 className="text-2xl mt-4">{item.title}</h1>
          <p className="text-base text-gray-500">{item.author}</p>
          <hr className="mt-2" />

          {/* Boş bir div ekleyerek tüm kartların aynı hizada olmasını sağlayın */}
          <div className="flex-grow"></div>

          <a
            className="text-base font-semibold text-red-300"
            href={item.url}
            target="_blank"
          >
            Click for details...
          </a>
        </div>
      ))}
    </div>
  );
}

export default Entertainment;

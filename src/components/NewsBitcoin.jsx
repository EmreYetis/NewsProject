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
    <div className="flex flex-wrap justify-around">
      {news.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 p-5 m-4 w-72 text-center rounded-lg shadow-md"
        >
          <img className="max-w-full h-auto" src={item.urlToImage} alt="" />
          <h1 className="text-2xl mt-4">{item.title}</h1>
          <p className="text-base text-gray-500">{item.author}</p>
          <p className="text-base font-semibold mt-2">
            {limitContent(item.content, 150)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NewsBitcoin;

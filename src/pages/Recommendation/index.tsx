import React, { useState, useEffect } from "react";
import Article from "./../../components/Article";
import axios from "axios";
import Loading from './../../components/Loading';

const Recommendation = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    return async () => {
      try {
        const response = await axios.get("http://localhost:3030/articles");
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const articleList = articles.map((article, index) => {
    return <Article key={index} {...{ ...article }} />;
  });

  return (
    <div className="flex justify-center">
    {articles.length === 0 && <div className="flex items-center justify-center h-[calc(100vh-300px)] mt-neg-10"><Loading /></div>}
    {articles.length !== 0 && 
        <div className="w-full max-w-3xl px-4">
          <div className="border rounded-lg border pb-6 border-gray-200">
            <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
              <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
                Articles
              </p>
              <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                <p className="text-xs md:text-sm leading-none text-gray-600">
                  From freeCodeCamp
                </p>
              </div>
            </div>
            <div className="px-6 pt-6 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {articles.length !== 0 && articleList}
                  {articles.length === 0 && (
                    <tr>
                      <td>
                        <h2>There are no articles to display</h2>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    }
      </div>
    
  );
};

export default Recommendation;

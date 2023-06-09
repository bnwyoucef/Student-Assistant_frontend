import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import "./index.css";
import Loading from "./../../components/Loading";

const ArticleDetails = () => {
  const { state } = useLocation();
  const [page, setPage] = useState("");
  useEffect(() => {
    return async () => {
      const response = await axios.post("http://localhost:3030/article", {
        link: state,
      });
      setPage(response.data);
    };
  }, []);

  return (
    <div>
      {!page && (
        <div className="flex items-center justify-center h-[calc(100vh-300px)] mt-neg-10">
          <Loading />
        </div>
      )}
      <div className="art flex justify-center text-left font-semibold text-gray-800">
        <div className="w-2/3">
          <div dangerouslySetInnerHTML={{ __html: page }}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;

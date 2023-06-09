import React from "react";
import "./article.css";
import { Link } from "react-router-dom";

const Article = ({ title, imageUrl, link }) => { 
  return (
    <tr className="cursor-pointer">
      <td className="pt-6">
        <Link to="/student/article" state={link}>
          <div className="flex items-center">
            <div className="bg-gray-100 rounded-sm p-2.5">
              <img className="w-40" src={imageUrl} />
            </div>
            <div className="pl-3">
              <div className="flex items-center text-lg">
                <p className="font-semibold text-gray-800">{title}</p>
              </div>
            </div>
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default Article;

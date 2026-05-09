import "./NewsCard.css";
import treeHuggerPhoto from "../../assets/image_08.jpg";
import bookmark from "../../assets/card/bookmark.svg";
import bookmarkLiked from "../../assets/card/bookmark-liked.svg";
import { useState } from "react";
import trashIcon from "../../assets/saved-articles/icon/trash.svg";
import trashIconHover from "../../assets/saved-articles/icon/trash-hover.svg";

function NewsCard({ article, isSavedPage }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBookmarkClick = () => {
    setIsLiked(!isLiked);
  };

  const dateConversion = () => {
    const dateExtraction = article.publishedAt.split("T")[0];
    const dateArray = dateExtraction.split("-");

    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = months[month - 1]; // "October"
    return `${monthName} ${day}, ${year}`;
  };
  return (
    <div
      className="news-card"
      onClick={() => window.open(article.url, "_blank")}
    >
      <img
        src={article.urlToImage}
        alt={article.title || "News Article"}
        className="news-card__image"
      />
      <div className="news-card__text-container">
        {/* <p className="news-card__date">{dateConversion()}</p> */}
        <p className="news-card__date">
          {article.publishedAt.includes("T")
            ? dateConversion()
            : article.publishedAt}
        </p>
        <h2 className="news-card__title">{article.title}</h2>
        <p className="news-card__paragraph">{article.description}</p>
        <h3 className="news-card__publisher">{article.source.name}</h3>
      </div>
      <button
        className="news-card__bookmark-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          handleBookmarkClick();
        }}
      >
        <img
          src={
            isSavedPage
              ? isHovered
                ? trashIconHover
                : trashIcon
              : isLiked
                ? bookmarkLiked
                : bookmark
          }
          alt={isSavedPage ? "trash icon" : "bookmark icon"}
          className="news-card__bookmark-button-icon"
        />
      </button>
      {isSavedPage && isHovered && (
        <div className="news-card__remove-tooltip">Remove from saved</div>
      )}
      {isSavedPage && <h3 className="news-card__keyword">{article.keyword}</h3>}
    </div>
  );
}
export default NewsCard;

import "./NewsCard.css";
import treeHuggerPhoto from "../../assets/image_08.jpg";
import bookmark from "../../assets/card/bookmark.svg";
import bookmarkLiked from "../../assets/card/bookmark-liked.svg";
import { useState } from "react";

function NewsCard() {
  const [isLiked, setIsLiked] = useState(false);

  const handleBookmarkClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="news-card">
      <img src={treeHuggerPhoto} alt="" className="news-card__image" />
      <div className="news-card__text-container">
        <p className="news-card__date">November 4, 2020</p>
        <h2 className="news-card__title">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className="news-card__paragraph">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <h3 className="news-card__publisher">TREEHUGGER</h3>
      </div>
      <button
        className="news-card__bookmark-button"
        onClick={handleBookmarkClick}
      >
        <img
          src={isLiked ? bookmarkLiked : bookmark}
          alt="bookmark icon"
          className="news-card__bookmark-button-icon"
        />
      </button>
    </div>
  );
}
export default NewsCard;

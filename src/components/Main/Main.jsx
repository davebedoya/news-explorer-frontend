import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useState } from "react";

function Main({ articles }) {
  const [rowsDisplayed, setRowsDisplayed] = useState(1);
  const displayedCards = articles.slice(0, rowsDisplayed * 3);
  const hasMore = displayedCards.length < articles.length;

  return (
    <div className="main">
      <h1 className="main__heading">Search results</h1>
      <NewsCardList newsCards={displayedCards} />
      {hasMore && (
        <button
          className="main__show-more-button"
          onClick={() => {
            setRowsDisplayed(rowsDisplayed + 1);
          }}
        >
          Show more
        </button>
      )}
    </div>
  );
}
export default Main;

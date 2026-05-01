import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import { useState } from "react";

function Main() {
  const newsCards = [1, 2, 3, 4, 5, 6, 7];
  const [rowsDisplayed, setRowsDisplayed] = useState(1);

  return (
    <div className="main">
      <h1 className="main__heading">Search results</h1>
      <NewsCardList newsCards={newsCards.slice(0, rowsDisplayed * 3)} />
      <button
        className="main__show-more-button"
        onClick={() => {
          setRowsDisplayed(rowsDisplayed + 1);
        }}
      >
        Show more
      </button>
    </div>
  );
}
export default Main;

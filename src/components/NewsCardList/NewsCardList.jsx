import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsCards }) {
  return (
    <div className="news-card-list">
      {newsCards.map((item) => {
        return <NewsCard key={item.url} article={item} />;
      })}
    </div>
  );
}
export default NewsCardList;

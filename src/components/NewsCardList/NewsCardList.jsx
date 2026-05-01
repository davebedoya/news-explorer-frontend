import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsCards }) {
  return (
    <div className="news-card-list">
      {newsCards.map((item) => {
        return <NewsCard />;
      })}
      {/* <NewsCard />
      <NewsCard />
      <NewsCard /> */}
    </div>
  );
}
export default NewsCardList;

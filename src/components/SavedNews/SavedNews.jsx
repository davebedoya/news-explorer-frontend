import "./SavedNews.css";
import dogImage from "../../assets/saved-articles/dog.jpg";
import mooseImage from "../../assets/saved-articles/moose.jpg";
import riverImage from "../../assets/saved-articles/river.jpg";
import starsImage from "../../assets/saved-articles/stars.jpg";
import yellowstoneImage from "../../assets/saved-articles/yellowstone.jpg";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  const savedArticles = [
    {
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      description: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`,
      urlToImage: dogImage,
      keyword: "Nature",
      publishedAt: "November 4, 2020",
      source: { name: "treehugger" },
    },
    {
      title: "Nature makes you better",
      description:
        "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
      urlToImage: riverImage,
      keyword: "Nature",
      publishedAt: "February 19, 2019",
      source: { name: "national geographic" },
    },
    {
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      description:
        "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
      urlToImage: yellowstoneImage,
      keyword: "Yellowstone",
      publishedAt: "October 19, 2020",
      source: { name: "national geographic" },
    },
    {
      title: "Grand Teton Renews Historic Crest Trail",
      description:
        "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
      urlToImage: mooseImage,
      keyword: "Parks",
      publishedAt: "November 4, 2020",
      source: { name: "National parks traveler" },
    },
    {
      title: "Scientists Don't Know Why Polaris Is So Weird ",
      description:
        "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them. ",
      urlToImage: starsImage,
      keyword: "Nature",
      publishedAt: "March 16, 2020",
      source: { name: "treehugger" },
    },
  ];
  return (
    <div className="saved-news">
      {savedArticles.map((article) => (
        <NewsCard key={article.title} article={article} isSavedPage={true} />
      ))}
    </div>
  );
}

export default SavedNews;

const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// What should this function receive from the search form?
export const getNews = (keyword) => {
  // step 1: get today's date
  const currentDate = new Date();
  const to = currentDate.toISOString().split("T")[0];

  // step 2: get date from 7 days ago
  const weekAgoDate = new Date(currentDate);
  weekAgoDate.setDate(currentDate.getDate() - 7);
  const from = weekAgoDate.toISOString().split("T")[0];

  // step 3: build URL with q, apiKey, from, to, pageSize
  const url = `${newsApiBaseUrl}?q=${keyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`;

  // step 4: fetch that URL
  return fetch(url).then(handleServerResponse);
};

const handleServerResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

// getItems returns a promise that resolves to an array
// of article data. You can render this array on the
// /saved-news route.
export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        // I just generated this at random from a mongodb id
        // generator website.
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "https://example.com/some-news-article",
        urlToImage: "https://placehold.co/400x300",
        description:
          "This is a fake saved article for testing the saved-news page.",
        publishedAt: "2026-05-01T12:00:00Z",
        source: { name: "Fake Source" },
      },
      // ...etc, more article objects, as many as you want
    ]),
  );
}

// saveArticle accepts an article object as an argument and
// pretends to save it to the DB. It returns a promise that
// resolves to the "saved" article, and an _id field to it.
// Add this article to your array of saved news items.
export function saveArticle(article) {
  // article is a search result from the NewsAPI
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0", // another one made up from the generator
      url: article.url, // Use the properties the newsAPI gives you, I just made these up
      title: article.title,
      //   imageUrl: article.imagUrl
      // whatever other properties from the newsAPI-given article object you saved to the database
      //    })
      //   })
      urlToImage: article.urlToImage,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
    });
  });
}

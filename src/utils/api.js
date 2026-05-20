const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = (keyword) => {
  const currentDate = new Date();
  const to = currentDate.toISOString().split("T")[0];

  const weekAgoDate = new Date(currentDate);
  weekAgoDate.setDate(currentDate.getDate() - 7);
  const from = weekAgoDate.toISOString().split("T")[0];

  const url = `${newsApiBaseUrl}?q=${keyword}&apiKey=${API_KEY}&from=${from}&to=${to}&pageSize=100`;

  return fetch(url).then(handleServerResponse);
};

const handleServerResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "Some news article",
        url: "https://example.com/some-news-article",
        urlToImage: "https://placehold.co/400x300",
        description:
          "This is a fake saved article for testing the saved-news page.",
        publishedAt: "2026-05-01T12:00:00Z",
        source: { name: "Fake Source" },
      },
    ]),
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65f7371e7bce9e7d331b11a0",
      url: article.url,
      title: article.title,
      urlToImage: article.urlToImage,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
    });
  });
}

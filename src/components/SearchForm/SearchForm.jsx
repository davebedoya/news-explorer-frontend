import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm">
      <div className="searchForm__container">
        <h1 className="searchForm__heading"> Whats going on in the world? </h1>
        <p className="searchForm__sub-heading">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className="searchForm__search-bar">
          <label htmlFor="search_bar__input">
            <input
              id="search_bar__input"
              type="text"
              className="searchForm__input"
              placeholder="Enter topic"
            ></input>
          </label>
          <button type="submit" className="searchForm__button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;

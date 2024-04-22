import React, { useEffect, useState } from "react";
import RepositoryDetailsPage from "./RepositoryDetailsPage";
import NotFoundPage from "./NotFoundPage";
import ErrorBoundary from "./ErrorBoundary";
import "../assets/Styles/RepositoriesPage.css";
import { Link } from "react-router-dom";

function SearchComponent(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    props.onSearch(searchQuery);
  };
  return (
    <div className="search-bar">
      <label htmlFor="search-bar">
        <input
          type="text"
          id="search-bar"
          onChange={(e) => {setSearchQuery(e.target.value), props.onSearch(e.target.value)}}
          placeholder="Type Here..."
        />
        <button className="search-btn" type="submit" onClick={handleSearch}>
          Search
        </button>
      </label>
    </div>
  );
}

function RepoCard(props) {
  const { repo } = props;
  return (
    <div className="repo-card">
      <h2 className="card-name">{repo.name}</h2>
      <p className="repo-des">{repo.description}</p>
      <button className="repo-btn">
        <Link to={`/repositories/${repo.id}`}>More...</Link>
      </button>
    </div>
  );
}

const RepositoriesPage = () => {
  const [myRepos, setMyRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  let myRepositories = myRepos;

  if (searchQuery) {
    myRepositories = myRepos?.filter((repo) =>
      repo.name.toLowerCase().includes(searchQuery)
    );
  }

  const getMyRepositories = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/FaithAkpan/repos?per_page=10`,
        {
          method: "GET",
          headers: {
            Authorization: "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",
          },
        }
      );

      const data = await response.json();
      setMyRepos(data);
      // setLoading(false);
    } catch (error) {
      console.error(error);
      // setLoading(false);
    }
  };

  const onSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    getMyRepositories();
  }, []);

  return (
    <section className="main-page">
      <SearchComponent onSearch={onSearch} />

      {myRepositories?.length ? (
        <>
          {myRepositories.map((repo) => {
            return <RepoCard repo={repo} key={repo.id}/>;
          })}
        </>
      ) : (
        <><p>No data found</p></>
      )}
    </section>
  );
};

export default RepositoriesPage;

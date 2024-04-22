import React, { useEffect, useState } from "react";
import "../assets/Styles/RepositoryDetailsPage.css";
import { Link, useParams } from "react-router-dom";

const RepositoryDetailsPage = () => {
  const { id } = useParams();
  const [repoDetails, setRepoDetails] = useState({});
  const getRepoDetails = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repositories/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: "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",
          },
        }
      );

      const data = await response.json();
      setRepoDetails(data);
      // setLoading(false);
    } catch (error) {
      console.error(error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    getRepoDetails();
  }, [id]);

  return (
    <div className="repo-dets-page">
      <h1>Repository Details Page</h1>
      <table className="repo-table">
        <thead className="table-header">
          <tr className="table-head-row">
            <th className="thead-th">Repo Description</th>

            <th className="thead-th">Repo Data</th>
          </tr>
        </thead>

        <tbody className="table-body">
          <tr>
            <td>Name</td>
            <td>{repoDetails.name}</td>
          </tr>

          <tr>
            <td>Full Name</td>
            <td>{repoDetails.full_name}</td>
          </tr>

          <tr>
            <td>URL</td>
            <td>{repoDetails.html_url}</td>
          </tr>

          <tr>
            <td>language</td>
            <td>{repoDetails.language}</td>
          </tr>
          
          <tr>
            <td>ID</td>
            <td>{repoDetails.id}</td>
          </tr>

          <tr>
            <td>Created At</td>
            <td>{repoDetails.created_at}</td>
          </tr>

          <tr>
            <td>Updated At</td>
            <td>{repoDetails.updated_at}</td>
          </tr>

          <tr>
            <td>Subscribers</td>
            <td>{repoDetails.subscribers_count}</td>
          </tr>

          <tr>
            <td>watchers</td>
            <td>{repoDetails.watchers}</td>
          </tr>

          <tr>
            <td>size</td>
            <td>{repoDetails.size}</td>
          </tr>

          <tr>
            <td>Default Branch</td>
            <td>{repoDetails.default_branch}</td>
          </tr>

          <tr>
            <td>visibility</td>
            <td>{repoDetails.visibility}</td>
          </tr>

          <tr>
            <td>Forks</td>
            <td>{repoDetails.forks_count}</td>
          </tr>

          <tr>
            <td>Open Issues</td>
            <td>{repoDetails.open_issues}</td>
          </tr>

          <tr>
            <td>Network Count</td>
            <td>{repoDetails.network_count}</td>
          </tr>

        </tbody>
      </table>

      <footer>
        <Link to={"/"} className="home-page-btn">
          Home page
        </Link>
      </footer>
    </div>
  );
  return <ol></ol>;
};

export default RepositoryDetailsPage;

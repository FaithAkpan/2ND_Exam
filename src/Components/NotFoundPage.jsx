import React, {useState}from "react";
import "../assets/Styles/NotFoundPage.css";
import {Link}  from  "react-router-dom";



const SearchComponent = ({ data }) => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const search = () => {
    return data.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const handleSearchButtonClick = () => {
    const searchResults = search();
    if (searchResults.length === 0) {
      // Redirect to 404 page if search results are empty
      history.push('/ErrorBoundary');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearchInputChange} 
      />
      <button onClick={handleSearchButtonClick}>Search</button>
      <ul>
        {search().map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};





const NotFoundPage = () => {
  return (
    <div className="not-found">
      <span>404</span>
      <h2 className="not-found-msg">Page Not Found</h2>
      <Link to={"/"} className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

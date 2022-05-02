import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import pyypl from '../images/pyypl.jpeg';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={pyypl} className='' alt='logo' />
        <p>Welcome to Pyypl World!!</p>

        {loading ? (
          <span>Loading...</span>
        ) : (
          <ol style={{textAlign: 'left', fontSize: '0.8em'}}>{posts && posts.map(({ title }) => <li> {title} </li>)}</ol>
        )}

      <Link to="/" className="login">Go Back</Link>
      </div>
    </div>
  );
};

export default Dashboard;

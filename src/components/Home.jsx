import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = 'https://run.mocky.io/v3/00efa05c-2efd-4b33-9957-5d5a84285a3e';
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data);
  };
  return (
    <>
      {posts.map((value, index) => (
        <Card value={value} index={index} />
      ))}
    </>
  );
};

export default Home;

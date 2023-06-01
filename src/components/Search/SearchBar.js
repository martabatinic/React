import React from 'react'
import styles from "./SearchBar.module.css"

import { useState, useEffect } from 'react'

import { searchIcon } from '../../assets'

function SearchBar({ setResults }) {

  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const[searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4e6f7290741b4250a209ff64e35d7b44')
      .then((response) => response.json())
      .then((json) => console.log(json));

      setPost(response.data);
      setLoading(false);
    }

    loadPost();
  }, [])

  return (
    <div className={styles.content}> 

        <div className={styles.searchIcon}>
            <img src={searchIcon} />
        </div>
      
      <div>
        <input 
          type="text" 
          placeholder='Search news' 
          onChange={(e) => setSearchTitle(e.target.value)}/>
        {loading ? (<h4>Loading...</h4>) : (  
          posts
          .filter((value) => {
          if(searchTitle === "") {
            return value
          } else if (value.title.toLowerCase().include(searchTitle.toLowerCase())){
            return value
          }
        })
        .map(item => <h5 key={item.id}>{item.title}</h5>)
        )}

      </div>

      {/* <input type="text" placeholder='Search news'/> */}

      <div className={styles.btn}>
        <a href="link" className={styles.btn1}>SEARCH</a>
      </div>

    </div>
  );
};

export default SearchBar
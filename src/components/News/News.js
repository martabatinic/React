import React from 'react'
import styles from './News.module.css'

import LatestNews from '../LatestNews/LatestNews'
import { favouriteIcon } from '../../assets'
import { useState, useEffect } from 'react'

function News () {

  const [data, setData] = useState(null)

    const apiGet = () => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4e6f7290741b4250a209ff64e35d7b44')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };

    useEffect (() => {
        apiGet();
    },[])
    

  return !data ? <p>Loading...</p> : (<ul className={styles.articles}>

         <LatestNews />

         {data.articles.map((articles, index) => <li className={styles.article}>
            
           <img src={articles.urlToImage} className={styles.articleImage} alt=""/>
           <p className={styles.articleCategory}>{articles.name}</p>
           <p className={styles.articleTitle}>{articles.title}</p>
           <p className={styles.articleAuthor}>{articles.author}</p>
           <a href=""><img className={styles.favouriteIcon} src={favouriteIcon} alt=""/></a>
           
        </li>)}
     </ul>
      )
  }

export default News
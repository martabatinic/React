import React from 'react'
import styles from './LatestNews.module.css'
import {latestnewsIcon, line2, arrow} from '../../assets'

import { useState, useEffect } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'

function LatestNews () {

    const [data, setData] = useState(null)

    const apiGet = () => {
        fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4e6f7290741b4250a209ff64e35d7b44')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };

    useEffect (() => {
        apiGet();
    },[])


    return !data ? <p>Loading</p> : (<li className={styles.latestNews}>

        <div className={styles.content}>

            <div className={styles.headline}>
                <img src={latestnewsIcon} alt="" />
                <p className={styles.head}>Latest news</p>
            </div>

            
            {data.articles.map(articles => (
                <InfiniteScroll className={styles.Scroll}
                    dataLength={data.articles.length} 
                    // next={fetchData}
                    hasMore = {true}
                    endMessage = {<h1>You have een it all!</h1>}>

                        <p className={styles.time}>{articles.publishedAt}</p>
                        <p className={styles.title}>{articles.title}</p>
                        <img className={styles.linija} src={line2} alt="" />
                </InfiniteScroll>)
            )}

            <div className={styles.footer}>
                <a href="" className={styles.see}>See all news</a>
                <img src={arrow} alt="" />
            </div>
        </div>

    </li>)
}

export default LatestNews
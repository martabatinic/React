import React from 'react'
import styles from './Search.module.css'

import SearchBar from './SearchBar'

import {line1 } from '../../assets'

const Search = () => {
  return (
    <search className={styles.search}>   
      <div className={styles.content}>
        
        <div className={styles.cnt}>
          <div className={styles.logo}>
            <p className={styles.lg}>My<span className={styles.black}>News</span></p>
          </div>

          <SearchBar />
        </div>

        <img className={styles.linija} src={line1}/>
      </div>
      
    </search>
  )
}

export default Search
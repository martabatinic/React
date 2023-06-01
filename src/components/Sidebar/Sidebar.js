import React from 'react'
import styles from './Sidebar.module.css'

import {homeIcon, generalIcon, businessIcon, healthIcon, scienceIcon, sportsIcon, technologyIcon, favouriteIcon} from '../../assets'

const Sidebar = () => {
  return (
    <sidebar className={styles.sidebar}>

        <div className={styles.content}>
            <a href="" className={styles.icon}>   
              <img src={homeIcon} alt="home" />
              <p className={`${styles.names} ${styles.active}`}>Home</p>
            </a>

            <a href="http://www.google.com/" className={styles.icon}>
              <img src={generalIcon} alt="general"/>
              <p className={styles.names}>General</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={businessIcon} alt="business" />
              <p className={styles.names}>Business</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={healthIcon} alt ="health" />
              <p className={styles.names}>Health</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={scienceIcon} alt="science" />
              <p className={styles.names}>Science</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={sportsIcon} alt="sports" />
              <p className={styles.names}>Sports</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={technologyIcon} alt="technology" />
              <p className={styles.names}>Technology</p>
            </a>

            <a href="" className={styles.icon}>
              <img src={favouriteIcon} alt="favorits" />
              <p className={styles.names}>Favourite</p>
            </a>
        </div>
        
    </sidebar>
  )
}

export default Sidebar
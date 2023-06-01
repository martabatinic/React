import React from 'react'
import styles from './Navigation.module.css'

import Sidebar from '../Sidebar/Sidebar'
import News from '../News/News'

const Navigation = () => {
  return (
    <navigation className={styles.navigation}>

      <div className={styles.content}>
        
        <Sidebar />
        
        <div className={styles.header}>

          <p className={styles.headline}>News</p>

          <div className={styles.head}>

            <News />
              
          </div>
        </div>

      </div>

    </navigation>
  )
}

export default Navigation
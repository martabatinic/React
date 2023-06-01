import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>   
      <div className={styles.content}>
        
          <div className={styles.links}>
            <p className={`${styles.link} ${styles.active}`}>Make MyNews your homepage</p>
            <p className={styles.link}>Every day discover what’s trending on the internet!</p>
          </div>

          <div className={styles.btn}>
            <div className={styles.btn1}>
              <a href='link' className={styles.botun1}>GET</a> 
            </div>

            <a href='link' className={styles.botun2}>No, thanks</a>
            
          </div>

        </div>
    </header>
  )
}

export default Header
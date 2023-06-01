import React from 'react'
import styles from './App.css'

import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <div className={styles.app}>

      <Header/> 

      <Search />

      <Navigation />

      </div>)
  }

export default App
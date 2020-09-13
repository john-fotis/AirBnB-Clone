import * as React from 'react'
import classnames from 'classnames'

import styles from './Hero.css'

function Hero({ children }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': children,
    [styles.children]: children,
    'hero-lg': !children
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1> Top Booking Choice</h1>
        <p className="mb-0">Planning your trip made easy!</p>
      </div>
    </div>
  )
}

export default Hero;
import React from 'react'

import styles from './button-outline.module.css';

const Button = (props) => {
  const { children, style } = props

  return (
    <button className={styles.button} style={style}>
      <div className={styles.textWrapper}>
        <div className={styles.textGradient}>{children}</div>
      </div>
    </button>
  )
}

export default Button
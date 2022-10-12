import React from 'react';
import classnames from 'classnames';

import Section from '@/components/layout/content/section';
import styles from './banner2.module.css';

const Banner2 = ({ banner2Data }) => {
  return (
    <Section className={classnames(styles.banner2Bg)} >
      <div className={classnames(styles.banner2, 'flex flex-row')} style={{ backgroundImage: `url(${banner2Data?.image?.url})` }}>
        <div className="flex md:flex-1"></div>
        <div className="mx-auto md:flex-1 flex items-center ">
          <h3 className={styles.banner2__title}>{banner2Data?.title}</h3>
        </div>
      </div>
    </Section>
  )
}

export default Banner2
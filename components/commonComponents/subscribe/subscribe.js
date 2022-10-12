import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';

import Section from '@/components/layout/content/section';
import InfoBlock from '@/components/layout/content/info-block';
import Button from '@/components/layout/content/button';

import styles from './subscribe.module.css';

const Subscribe = ({ colorDetails, subscribeData }) => {
  return (
    <div className={styles.subscribeSection} style={{ backgroundImage: `url(${subscribeData?.image?.url})` }}>
      <div className={styles.subscribeSectionInfoMobile}></div>
      <Section className={classnames("flex flex-col justify-center items-start w-[40%] h-[100%]", styles.subscribeSectionInfo)}>
        <div className={styles.subscribeSectionTitle} style={{ color: colorDetails.textColor }}>{subscribeData?.title}</div>
        <div className={styles.subscribeSectionText} style={{ color: colorDetails.textColor }}>Sign-up for our Letter Head</div>
        <Button className={styles.subscribeSectionButton}>Subscribe</Button>
      </Section>
    </div>
  )
}

export default Subscribe
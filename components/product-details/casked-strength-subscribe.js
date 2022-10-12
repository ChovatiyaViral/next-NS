import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';

import Section from '@/components/layout/content/section';
import InfoBlock from '@/components/layout/content/info-block';
import Button from '@/components/layout/content/button';

import styles from './casked-strength-subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.subscribeSection}>
      <Section className={classnames("flex flex-col justify-center items-start w-[40%] h-[100%]", styles.subscribeSectionInfo)}>
        <div className={styles.subscribeSectionTitle}>the soul of summer</div>
        <div className={styles.subscribeSectionText}>Sign-up for our Letter Head</div>
        <Button className={styles.subscribeSectionButton}>Subscribe</Button>
      </Section>
    </div>
  )
}

export default Subscribe
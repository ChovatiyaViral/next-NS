import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/io";

import Section from '@/components/layout/content/section';
import InfoBlock from '@/components/layout/content/info-block';
import styles from './tasting-notes.module.css';

const TastingNotesItem = (props) => {
  const {
    icon,
    title,
    description,
  } = props;

  return (
    <div className="flex flex-row justify-start items-start">
      <div className={styles.tastingNotesItemIcon}><img src={icon?.url} alt={icon?.name} /></div>
      <div className={styles.tastingNotesItemInfo}>
        <div className={styles.tastingNotesItemInfoTitle}>{title}</div>
        <div className={styles.tastingNotesItemInfoDescription}>{description}</div>
      </div>
    </div>
  )
}

export default TastingNotesItem
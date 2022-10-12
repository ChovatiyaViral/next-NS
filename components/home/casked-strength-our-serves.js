import React from 'react'
import Image from 'next/image'
import classnames from 'classnames'

import Section from '@/components/layout/content/section';
import Button from '@/components/layout/content/button';
import InfoBlock from '@/components/layout/content/info-block';

import styles from './our-serves.module.css'

const OurServes2 = (props) => {
  const {
    tagline,
    taglineColor,
    hideButton,
  } = props;

  const images = [
    { src: "/img11.png" },
    { src: "/img10.png" },
    { src: "/img9.png" },
  ];

  const renderInfoHover = () => {
    return (
      <div className={classnames("columnFlex", styles.colDiv)}>
        <div>
          <h5 className="txtDiv">MAKE YOUR MIXES</h5>
          <h1 className="txtDivTitle">gin &amp; ginger</h1>
        </div>
        <div className={classnames("rowFlex", "horidiv")}>
          <img src="/img17.png" alt="Flower" width={80} height={74} />
          <div className="verticalLine"></div>
          <ul className="ml-8  lists">
            <li className={styles.txtList}>SODA 250ml</li>
            <li className={styles.txtList}>CHERRY BRANDY 250ml</li>
            <li className={styles.txtList}>LEMON JUICE 20ml</li>
            <li className={styles.txtList}>SLOE 20ml</li>
            <li className={styles.txtList}>ISG 45ml</li>
          </ul>
        </div>
        <ul className="singleTXT">
          <li>
            4 are bottled at natural cask strength and unfettered by chill
            filtration. Carefully selected from
          </li>
        </ul>
      </div>
    );
  }

  const renderBlock = (item) => {
    return (
      <div
        className={classnames(styles.our_servers__item, "flex-1 w-100 relative bg-cover h-[34.89vw]")}
        style={{
          backgroundImage: `url(${item.src})`,
        }}
      >
        {renderInfoHover()}
      </div>
    );
  }

  return (
    <section className={classnames(styles.Casked_ourservesbg)}>
      <Section>
        <div className="our_serves mt-[150px] mb-[100px]">
          <div className="mb-[58px]">
            <InfoBlock
              tagline={tagline}
              taglineColor={taglineColor}
              title="Our Serves"
              titleColor="#EAB755"
            />
          </div>
          <div className="grid grid-cols-3 gap-[36px]">
            {images.map(renderBlock)}
          </div>
          {!hideButton && (
            <div className="flex justify-center">
              <Button>View All</Button>
            </div>
          )}
        </div>
      </Section>
    </section>
  );
};

export default OurServes2
import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import Section from '@/components/layout/content/section';
import InfoBlock from '@/components/layout/content/info-block';
import styles from './details-section.module.css';

const DetailsSection = ({ detailData, lineGradientColor, textColor }, props) => {
  const {
    containerStyle,
  } = props;
  return (
    <div className={classnames(containerStyle)}>
      <Section className={classnames("flex flex-col md:flex-row justify-between items-center sm:px-[4%]", styles.imageMainBgSection)}>
        <div className="flex-1 justify-center items-center">
          <div className={styles.imageBgSection} style={{ background: lineGradientColor }}>
            <div className={styles.imageWrapper}>
              <img
                src={detailData?.image?.url}
                alt='banner-bottle'
              />
            </div>
          </div>
        </div>
        <div className={classnames("flex-1 md:pl-[8.3333vw]", styles.containerDescription)}>
          <InfoBlock
            containerStyle={styles.containerStyle}
            tagline={detailData?.category}
            taglineColor={textColor}
            title={detailData?.name}
            titleColor={textColor}
            description={detailData?.description}
            descriptionStyle={{
              textAlign: 'left',
            }}
            afterDescriptionSection={() => {
              return (
                <div className="mt-6 md:mt-[50px]">
                  <div className={styles.volumeText}>50% ALC./VOL.</div>
                  <div className={styles.tasteSummaryText} style={{ color: textColor }}>{detailData?.taste_summary}</div>
                </div>
              );
            }}
            buttonText={'Buy Now'}
            buttonStyle={styles.buttonStyle}
          />
        </div>
      </Section>
    </div>
  )
}

export default DetailsSection
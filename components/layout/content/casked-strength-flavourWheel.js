import React from 'react';
import classnames from 'classnames';

import InfoBlock from '@/components/layout/content/info-block';
import RadarChart from '@/components/layout/content/RadarChart-2'
import styles from '../../../styles/home.module.css';
import Section from '@/components/layout/content/section';

const flavourWheel2 = ({ flavourWheelData }) => {

  return (
    <section className={classnames(styles.orangeFlavourWheelbg)}>
      <Section>
        <div className={classnames(styles.flavourWheel, 'flex flex-row')}>
          <div className='col-12 col-lg-6 position-relative flovor-item-container'>
            <div className={styles.flavourWheelInfo}>
              <InfoBlock
                titleArray={[
                  {
                    title: `${flavourWheelData?.header}`,
                    titleColor: "#EAB755",
                  },
                ]}
                description={flavourWheelData?.content}
                descriptionStyle={{
                  color: '#363755',
                  textAlign: 'left',

                  width: '368.35px',
                }}
              />
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className={styles.chart}>
              <RadarChart RadarChartData={flavourWheelData?.points} />
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

export default flavourWheel2
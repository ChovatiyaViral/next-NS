import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import Section from '@/components/layout/content/section';
import InfoBlock from '@/components/layout/content/info-block';

import styles from './tasting-notes.module.css';
import TastingNotesItem from './tasting-notes-item';

const TastingNotes = ({ testingNotingData, colorDetails }) => {
  const [mobileNotesView, setMobileNotesView] = React.useState(false);
  return (
    <Section className={styles.tastingSection}>
      <InfoBlock
        title={testingNotingData?.header}
        titleColor={colorDetails.textColor}
      />
      <div className={classnames("flex flex-col md:flex-row justify-center items-center mb-[90px]", styles.tastingInnerSection)}>
        <div className={classnames("flex justify-end items-center", styles.firstDiv)}>
          <div className="w-[75%]">
            {
              testingNotingData && testingNotingData.notes_left_side && testingNotingData.notes_left_side.length > 0 ?
                testingNotingData.notes_left_side.map((item, index) => {
                  return (
                    <TastingNotesItem
                      key={index}
                      icon={item?.tasting_note?.icon}
                      title={item?.tasting_note?.name}
                      description={item?.description}
                    />
                  );
                }) : null}
          </div>
        </div>
        <div>
          <div className={classnames("mx-[30px]", styles.tastingNotesImageWrapper)}>
            <img
              src={testingNotingData?.center_image?.url}
              alt="Tasting Notes"
            />
          </div>
        </div>
        <div className={classnames("flex justify-start items-center", styles.lastDiv)}>
          <div className="w-[70%]">
            {testingNotingData && testingNotingData.notes_right_side && testingNotingData.notes_right_side.length > 0 ?
              testingNotingData.notes_right_side.map((item, index) => {
                return (
                  <TastingNotesItem
                    key={index}
                    icon={item?.tasting_note?.icon}
                    title={item?.tasting_note?.name}
                    description={item?.description}
                  />
                );
              }) : null}
          </div>
        </div>

        <div className={styles.mobileNotes}>
          <hr className="w-100 my-6" />
          {
            mobileNotesView ?
              (<div className={classnames("flex justify-center items-center")}>
                <div className="w-[70%]">
                  {
                    testingNotingData && testingNotingData.notes_left_side && testingNotingData.notes_left_side.length > 0 ?
                      testingNotingData.notes_left_side.map((item, index) => {
                        return (
                          <TastingNotesItem
                            key={index}
                            icon={item?.tasting_note?.icon}
                            title={item?.tasting_note?.name}
                            description={item?.description}
                          />
                        );
                      }) : null}
                </div>
              </div>)
              :
              (<div className={classnames("flex justify-center items-center")}>
                <div className="w-[75%]">
                  {testingNotingData && testingNotingData.notes_right_side && testingNotingData.notes_right_side.length > 0 ?
                    testingNotingData.notes_right_side.map((item, index) => {
                      return (
                        <TastingNotesItem
                          key={index}
                          icon={item?.tasting_note?.icon}
                          title={item?.tasting_note?.name}
                          description={item?.description}
                        />
                      );
                    }) : null}
                </div>
              </div>)
          }
          <hr className="w-100 mt-0 mb-6" />
        </div>
        <div className={styles.selectedNotes}>
          <span className={classnames("w-3.5 h-3.5 rounded-full ", !mobileNotesView ? "bg-gray-500" : "bg-gray-300")} onClick={() => setMobileNotesView(!mobileNotesView)}></span>
          <span className={classnames("w-3.5 h-3.5 rounded-full", mobileNotesView ? "bg-gray-500" : "bg-gray-300")} onClick={() => setMobileNotesView(!mobileNotesView)}></span>
        </div>
      </div>

    </Section>
  )
}

export default TastingNotes
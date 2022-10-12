import React from "react";
import Image from "next/image";
import classnames from "classnames";

import Section from "../layout/content/section";
import InfoBlock from "@/components/layout/content/info-block";
import ButtonOutline from "@/components/layout/content/button-outline";

import styles from "./summer-stories.module.css";

const SummerStories = ({ summerStoriesData }) => {
  const data = [
    {
      image: "/img16.png",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
    },
    {
      image: "/img15.png",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
    },
    {
      image: "/img14.png",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
    },
  ];

  const renderItems = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className={styles.story_item}>
          <div
            className={styles.story_item__image}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
          <div
            className={classnames(
              "flex flex-row justify-start items-center",
              styles.story_item__info
            )}
          >
            <div className={styles.story_item__info__pic}></div>
            <div className={styles.story_item__info__block}>
              <div className={styles.story_item__info__block__title}>
                {item.title}
              </div>
              <div className={styles.story_item__info__block__description}>
                {item.description}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <section>
      <Section>
        {/* <div className={styles.vectorBg5}>
          <svg
            viewBox="0 0 464 754"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M457.319 753C456.652 676.923 455.719 517.041 457.319 486.13C458.918 455.22 428.331 446.894 412.837 446.594H234.413C223.418 445.097 157.5 451.094 157.5 387.5C157.5 335.717 224.417 331.667 234.413 331.217H303.883C334.037 331.667 394.345 319.986 394.345 269.667C394.345 219.348 331.372 206.169 299.885 205.87H82.9769C56.9879 206.768 5.20983 197.154 6.00949 151.507V0"
              stroke="#EDA4B1"
              strokeOpacity="0.21"
              strokeWidth="12"
            />
          </svg>
        </div> */}

        <div className={classnames("mt-[140px]", styles.SummerStories)}>
          <InfoBlock
            title={summerStoriesData?.header}
            titleColor="#6A83DB"
            description={summerStoriesData?.content}
          />
          <div
            className={classnames(
              "grid grid-cols-3 gap-[2.8125vw]",
              styles.summer_stories
            )}
          >
            {renderItems()}
          </div>
          <div className="flex justify-center mb-[100px] md:mb-[50px]">
            <ButtonOutline
              style={{
                marginTop: 0,
              }}
            >
              Follow Us
            </ButtonOutline>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default SummerStories;

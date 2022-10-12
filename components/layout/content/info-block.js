import React from "react";
import classnames from "classnames";
import Link from "next/link";

import Button from "@/components/layout/content/button";

import styles from "./info-block.module.css";

const InfoBlock = (props) => {
  const {
    containerStyle,

    tagline,
    taglineColor,

    title,
    titleColor,
    titleArray,

    horizontalLineStyle,

    description,
    descriptionStyle,

    afterDescriptionSection,

    buttonText,
    buttonStyle,
    buttonLink,

    hasLearnMore,
    hasLearnMorestyle,
  } = props;

  const renderTitleSection = (details, isArray) => {
    return (
      <>
        <span
          style={{ color: details.titleColor }}
          dangerouslySetInnerHTML={{
            __html: details.title + (isArray ? " " : ""),
          }}
        />
      </>
    );
  };

  const renderTitle = () => {
    if (titleArray) {
      const titleElements = [];
      for (let i = 0, titleSection; (titleSection = titleArray[i]); i++) {
        titleElements.push(renderTitleSection(titleSection, true));
      }

      return titleElements;
    } else {
      return renderTitleSection({ title, titleColor });
    }
  };

  return (
    <div
      className={classnames(
        "info-block-container flex flex-col items-center justify-center",
        styles.infoBlock,
        containerStyle
      )}
    >
      {tagline && (
        <h4
          className={styles.tagline}
          style={{ color: taglineColor ? taglineColor : "#363755" }}
        >
          {tagline}
        </h4>
      )}
      <h2 className={styles.titleBlock}>{renderTitle()}</h2>
      <hr className={styles.horizontalLine} styles={horizontalLineStyle} />
      {description && (
        <div className={styles.description} style={descriptionStyle}>
          {description}
        </div>
      )}
      {afterDescriptionSection && afterDescriptionSection()}
      {buttonText && <Button className={buttonStyle}>{buttonText}</Button>}
      {buttonLink && (
        <div>{buttonLink}</div>
      ) }
      {hasLearnMore && (
        <div className={styles.hasLearnMorestyle}>{hasLearnMore}</div>
      )}
    </div>
  );
};

export default InfoBlock;

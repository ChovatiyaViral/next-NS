import React from "react";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import InfoBlock from "@/components/layout/content/info-block";
import Section from "@/components/layout/content/section";
import Button from "@/components/layout/content/button";

import styles from "./Suggestions.module.css";

const Suggestion = ({ suggestionData, colorDetails }, props) => {
  const { containerStyle } = props;
  const suggestionProductData = suggestionData && suggestionData.products && suggestionData.products.length > 0 && suggestionData.products[0]

  return (
    <section className={classnames("md:mb-[120px]", colorDetails.sectionName !== "caskedStrength" ? styles.suggestionBg : styles.suggestionCaskedBg)}>
      <Section>
        <div className={classnames("flex-1", styles.suggestionDescrption)}>
          <InfoBlock
            tagline={suggestionData?.sub_header}
            taglineColor={colorDetails.textColor}
            title={suggestionData?.header}
            titleColor={colorDetails.textColor}
            afterDescriptionSection={() => {
              return (
                <div
                  className={classnames(
                    "flex flex-col justify-center items-center",
                    styles.suggestionBorder
                  )}
                  style={{ border: `2px solid ${colorDetails.suggetionTextColor}` }}
                >
                  {/* <div className={styles.suggestionImage}> */}
                  <img
                    src={suggestionProductData?.image?.url}
                    alt="bottle-suggestion"
                    className={styles.suggestionImage}
                  />
                  {/* </div> */}
                  <div className={styles.volumeText} style={{ color: colorDetails.suggetionTextColor }}>{suggestionProductData?.category}</div>
                  <div className={styles.tasteSummaryText} style={{ color: colorDetails.suggetionTextColor }}>
                    {suggestionProductData?.name}
                  </div>
                  <Link href={suggestionProductData?.slug ? suggestionProductData?.slug : ""}>
                    <a className={classnames("link", styles.btnDiscoverLink)}>
                      <Button className={styles.buttonStyle}>Discover</Button>
                    </a>
                  </Link>
                </div>
              );
            }}
          // buttonText={"Discover"}
          // buttonStyle={styles.buttonStyle}
          />
        </div>
      </Section>
    </section>
  );
};

export default Suggestion;

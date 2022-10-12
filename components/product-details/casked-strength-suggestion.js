import React from "react";
import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";

import InfoBlock from "@/components/layout/content/info-block";
import Section from "@/components/layout/content/section";
import Button from "@/components/layout/content/button";

import styles from "./casked-strength-Suggestions.module.css";

const Suggestion = ({ suggestionData }, props) => {
  const { containerStyle } = props;
  const suggestionProductData = suggestionData && suggestionData.products && suggestionData.products.length > 0 && suggestionData.products[0]
  return (
    <section className={classnames("mb-[120px]", styles.suggestionBg)}>
      <Section>
        <div className="flex-1">
          <InfoBlock
            tagline={suggestionData?.sub_header}
            taglineColor="#EAB755"
            title={suggestionData?.header}
            titleColor="#EAB755"
            afterDescriptionSection={() => {
              return (
                <div
                  className={classnames(
                    "flex flex-col justify-center items-center",
                    styles.suggestionBorder
                  )}
                >
                  <div className={styles.suggestionImage}>
                    <Image
                      src={"/" + suggestionProductData?.image?.name}
                      alt="bottle-suggestion"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.volumeText}>{suggestionProductData?.category}</div>
                  <div className={styles.tasteSummaryText}>
                    {suggestionProductData?.name}
                  </div>
                  <Link href={suggestionProductData?.slug ? suggestionProductData?.slug : ""}>
                    <a className={"link"}>
                      <Button className={styles.buttonStyle}>Discover</Button>
                    </a>
                  </Link>
                </div>
              );
            }}

          />
        </div>
      </Section>
    </section>
  );
};

export default Suggestion;

import React from "react";
import Image from "next/image";
import classnames from "classnames";

import Section from "@/components/layout/content/section";
import Button from "@/components/layout/content/button";
import InfoBlock from "@/components/layout/content/info-block";

import styles from "./our-serves.module.css";

const OurServes = ({ ourServesData }, props) => {
  const { tagline, taglineColor, hideButton } = props;

  const renderInfoHover = (hoverData) => {
    return (
      <div className={classnames("columnFlex", styles.colDiv)}>
        <div>
          <h5 className="txtDiv">{hoverData?.sub_header}</h5>
          <h1 className="txtDivTitle">{hoverData?.header}</h1>
        </div>
        <div className={classnames("rowFlex", "horidiv")}>
          <img src={hoverData?.flavour_image?.url} alt="Flower" width={80} height={74} />
          <div className="verticalLine"></div>
          <ul className="ml-8  lists">
            <li className={styles.txtList}>{hoverData?.ingredients}</li>
          </ul>
        </div>
        <ul className="singleTXT">
          <li>
            {hoverData?.description}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.ourservesbg2}>
        <section className={classnames(styles.ourservesbg)}>
          <Section>
            <div className={classnames("our_serves mb-8 mt-11 md:mt-[150px] md:mb-[150px]")}>
              <div className="mb-[40px]">
                <InfoBlock
                  tagline={tagline}
                  taglineColor={taglineColor}
                  title={ourServesData?.header}
                  titleColor="#6A83DB"
                />
              </div>
              <div className={classnames("grid grid-cols-3 gap-2.5 md:gap-[36px] ", styles.OurServesImg)}>
                {ourServesData && ourServesData.serves && ourServesData.serves.length > 0 ?
                  ourServesData.serves.map((item, index) => {
                    return (
                      <div
                        className={classnames(
                          styles.our_servers__item,
                          "flex-1 w-100 relative bg-cover h-[34.89vw]"
                        )}
                        style={{
                          backgroundImage: `url(${item?.image?.url})`,
                        }}
                        key={index}
                      >
                        {renderInfoHover(item)}
                      </div>
                    )
                  }) : null
                }
              </div>
              {!hideButton && (
                <div className={classnames("flex justify-center", styles.view_all_btn)}>
                  <Button>{ourServesData?.view_all_button?.title}</Button>
                </div>
              )}
            </div>
          </Section>
        </section>
      </div>
    </div>
  );
};

export default OurServes;

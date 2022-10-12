import React from "react";
import Image from "next/image";
import classnames from "classnames";

import Section from "@/components/layout/content/section";
import Button from "@/components/layout/content/button";
import InfoBlock from "@/components/layout/content/info-block";

import styles from "./our-serves.module.css";
import AwesomeSlider from "react-awesome-slider";

const OurServes3 = ({ ourServesData, colorDetails }, props) => {
  const { tagline, taglineColor, hideButton } = props;

  const renderInfoHover = (hoverData) => {
    return (
      <div className={classnames("columnFlex ourGinColDiv", styles.colDiv, styles.ourGinColDiv)}>
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
      {/* <div className={styles.Saffron_ourservesbg2}> */}
      <section className={classnames(colorDetails.sectionName === "caskedStrength" ? styles.Casked_ourservesbg : styles.Saffron_ourservesbg)}>
        <Section>
          <div className="our_serves mt-[150px] mb-[100px]">
            <div className="mb-[58px]">
              <InfoBlock
                tagline={tagline}
                taglineColor={taglineColor}
                title={ourServesData?.header}
                titleColor={colorDetails.textColor}
              />
            </div>
            <div className={classnames("grid grid-cols-3 gap-[36px] ", styles.OurServesImg, styles.ourGinOurServiceSection)}>
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
            <AwesomeSlider
              buttons={false}
              organicArrows={false}
              fillParent={false}
              className={classnames("ourGinOurServiceSectionMobile", styles.ourGinOurServiceSectionMobile)}
            >
              {ourServesData && ourServesData.serves && ourServesData.serves.length > 0 ?
                ourServesData.serves.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className={styles.ourGinMobileImg}>
                        <img src={item?.image?.url} alt="history" />
                      </div>
                      {renderInfoHover(item)}
                    </div>
                  )
                }) : null
              }
            </AwesomeSlider>

            {!hideButton && (
              <div className="flex justify-center">
                <Button>View All</Button>
              </div>
            )}
          </div>
        </Section>
      </section>
    </div>
    // </div>
  );
};

export default OurServes3;

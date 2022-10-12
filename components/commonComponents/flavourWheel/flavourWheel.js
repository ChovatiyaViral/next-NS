import React from "react";
import classnames from "classnames";

import InfoBlock from "@/components/layout/content/info-block";
import RadarChart from "@/components/layout/content/RadarChart";
import styles from "../../../styles/home.module.css";
import Section from "@/components/layout/content/section";

const flavourWheel = ({ flavourWheelData, colorDetails, slug }) => {
  return (
    <section className={classnames(slug === "casked-strength" ? styles.orangeFlavourWheelbg : styles.flavourWheelbg)}>
      <Section>
        <div className={classnames(styles.flavourWheel, "flex flex-col-reverse items-center md:flex-row ")}>
          <div className="col-12 col-md-6 position-relative flovor-item-container">
            <div className={styles.flavourWheelInfo}>
              <InfoBlock
                titleArray={[
                  {
                    title: `${flavourWheelData?.header}`,
                    titleColor: `${colorDetails.textColor}`,
                    textAlign: "left",

                  },
                ]}
                description={flavourWheelData?.content}
                descriptionStyle={{
                  color: `${colorDetails.textColor}`,
                  textAlign: "left",

                  width: "368.35px",
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.chart} style={{ background: colorDetails.radarChartBgColor }}>
              <RadarChart RadarChartData={flavourWheelData?.points} colorDetails={colorDetails} />
            </div>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default flavourWheel;

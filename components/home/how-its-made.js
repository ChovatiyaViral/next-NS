import React from "react";
import Image from "next/image";
import classnames from "classnames";

import Section from "@/components/layout/content/section";
import InfoBlock from "@/components/layout/content/info-block";

import styles from "./how-its-made.module.css";


function Howitsmade({ howItMadeData }) {
  return (
    <div>
      <section className={classnames(styles.howitsmade)}>
        <Section>
          <div className={styles.howitsmade3}>
            <div
              className={classnames(
                "flex flex-1 items-center justify-evenly h-[45.83vw] mt-16 md:mt-[15px] mb-[15px] pt-[40px] pb-[0] ",
                styles.Howitsmade2
              )}
            >
              <div
                className={classnames(
                  "flex-1 grow sm:grid grid-cols-1",
                  styles.leftCol
                )}
                style={{ backgroundImage: `url(${howItMadeData?.image?.url})` }}
              />

              <div className={classnames("flex flex-1 flex-col items-center justify-center  sm:grid grid-cols-1 -mt-8 md:mt-0", styles.how_it_made_description)}>
                <InfoBlock
                  title={howItMadeData?.header}
                  titleColor="#6A83DB"
                  description={howItMadeData?.content}
                  descriptionStyle={{
                    width: "25vw",
                    textAlign: "left",
                    color: "#6A83DB",
                  }}
                  hasLearnMore={howItMadeData?.link?.title}
                  hasLearnMorestyle={{ textAlign: "left" }}
                />
              </div>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export default Howitsmade;

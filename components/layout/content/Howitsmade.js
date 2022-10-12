import React from "react";

import Section from "./section";
import style from "./howItMade.module.css";
import classnames from "classnames";
import Image from "next/image";
import styles from "./info-block.module.css";
import InfoBlock from "@/components/layout/content/info-block";

function Howitsmade() {
  return (
    <div>
      <section className={classnames(style.howitsmade)}>
        <Section>
          <div
            className={classnames(
              "flex flex-1 items-center justify-evenly h-[45.83vw] mt-[15px] mb-[15px]",
              styles.fullHeightSection2
            )}
          >
             <Image
              src="/assets/images/bottle-ingredients.png"
              alt=""
              width={610}
              height={630}
             
            />
            <div className={classnames("flex-1 grow", styles.leftCol)} />
           
            <div className="flex flex-1 flex-col items-center justify-center">
              <InfoBlock
                title="How Its Made"
                titleColor="#6A83DB"
                description="Remember those long, hot, balmy days, where we were in the company of good people, in great surroundings, just enjoying the moment, thinking about nothing else? In today’s world there are not enough of those moments, so we have set out to bring the good times back."
                descriptionStyle={{
                  width: "25vw",
                  textAlign: "left",
                  color:"#6A83DB",
                }}
                hasLearnMore ="Learn More"
             
              />
            </div>
          </div>
        </Section>
      </section>
      
    </div>
  );
}

export default Howitsmade;

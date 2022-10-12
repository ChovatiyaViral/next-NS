import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import Button from "@/components/layout/content/button";

import Section from "../layout/content/section";
import InfoBlock from "@/components/layout/content/info-block";

import styles from "./full-height-section-2.module.css";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const FullHeightSection2 = ({ fullHeight2Data }) => {
  return (
    <Section>
      <div className={styles.fullHeightSection2}>
        <div
          className={classnames(
            "flex flex-1 items-center justify-evenly h-[53.489vw] mt-[15px] mb-[15px]",
            styles.fullHeightSection4
          )}
        >
          {/* <div className="sm:grid grid-cols-1"> */}
          <div className={classnames("flex-1 grow overflow-hidden relative", styles.upperRightDiv)}>
            <ParallaxProvider>
              <Parallax
                translateY={['50%', '-50%', 'easeInOut']}
                speed={50}
              >
                <img
                  src={fullHeight2Data?.image?.url}
                  alt='bottle  img'
                  width={525}
                  className={classnames(styles.leftCol)}
                  height={1140}
                  id="mobile_img_full_2"
                />
              </Parallax>
            </ParallaxProvider>
            {/* <div className={classnames("flex-1 grow", styles.leftCol)} /> */}
          </div>
          <div
            className={classnames(
              "flex flex-1 flex-col items-center justify-center",
              styles.caskstrength_infoblock
            )}
          >
            <InfoBlock
              tagline={fullHeight2Data?.sub_title}
              title={fullHeight2Data?.title}
              titleColor="#FBBB7F"
              description={fullHeight2Data?.description}
              descriptionStyle={{
                width: "25vw",
                textAlign: "left",
              }}
            // buttonText="Discover"
            />
            <Link href={fullHeight2Data?.cta_link ? fullHeight2Data?.cta_link : ""}>
              <a className={"link"}>
                <Button className={styles.buttonStyle}>{fullHeight2Data?.cta_title}</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FullHeightSection2;

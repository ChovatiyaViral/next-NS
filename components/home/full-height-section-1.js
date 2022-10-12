import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";
import Button from "@/components/layout/content/button";

import Section from "@/components/layout/content/section";
import InfoBlock from "@/components/layout/content/info-block";

import styles from "./full-height-section-1.module.css";
import { height } from "tailwindcss/defaultTheme";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const FullHeightSection1 = ({ fullHeight1Data }) => {
  return (
    <Section>
      <div className={styles.fullHeightSection1}>
        <div
          className={classnames(
            "flex flex-1 items-center justify-evenly text-center h-[53.489vw] mt-[15px] mb-[15px]",
            styles.fullHeightSection3
          )}
          style={{ background: "#FEF1FF" }}
        >
          <div className={classnames("flex md:flex-1 flex-col items-center justify-center", styles.indian_summner_gin_div)}>
            <InfoBlock
              tagline={fullHeight1Data?.sub_title}
              title={fullHeight1Data?.title}
              titleColor="#6A83DB"
              description={fullHeight1Data?.description}
              descriptionStyle={{
                width: "25vw",
                textAlign: "left"
              }}
            // buttonText="Discover"
            />
            <Link href={fullHeight1Data?.cta_link ? fullHeight1Data?.cta_link : ""}>
              <a className={"link"}>
                <Button className={styles.buttonStyle}>{fullHeight1Data?.cta_title}</Button>
              </a>
            </Link>
          </div>
          <div className={classnames("flex-1 grow w-full h-full overflow-hidden relative", styles.upperRightDiv)} >
            <ParallaxProvider>
              <Parallax
                translateY={['20%', '-60%', 'easeInOut']}
                speed={50}
              >
                <img
                  src={fullHeight1Data?.image?.url}
                  alt='bottle  img'
                  width={525}
                  className={classnames(styles.rightCol)}
                  height={1024}
                  id="mobile_img"
                />
              </Parallax>
            </ParallaxProvider>
            {/* <Image
              src='/img5.png'
              alt='bottle  img'
              width={525}
              className={classnames(styles.rightCol)}
              height={1024}
              id="mobile_img"
            /> */}
            {/* <div className={classnames("flex-1 grow", styles.rightCol)}></div> */}
          </div>
        </div>
      </div>
    </Section >
  );
};

export default FullHeightSection1;

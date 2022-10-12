import Head from "next/head";
import ImageSlider from "../components/home/imageSlider";
import website from "website";

import InfoBlock from "@/components/layout/content/info-block";
import Banner2 from "@/components/home/banner2";
import FullHeightSection1 from "@/components/home/full-height-section-1";
import FullHeightSection2 from "@/components/home/full-height-section-2";
import OurServes from "@/components/home/our-serves";
import SummerStories from "@/components/home/summer-stories";
import HowItsMade from "@/components/home/how-its-made";

import SecContent from "@/components/secContent";
import Content2 from "@/components/Content2";
import VideoSlider from "@/components/videoSlider";

import styles from "../styles/home.module.css";
import FlavourWheel from "@/components/commonComponents/flavourWheel/flavourWheel";
import Footer from "@/components/layout/footer/Footer";
import classNames from "classnames";
import HomeAnimation from "@/components/home/home-animation";
import React from "react";
import axios from "axios";
import Loader from "@/components/commonComponents/loader/Loader";


export default function Home() {

  const [indianSummerGinData, setIndianSummerGinData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getIndianSummerGinHomeData()
  }, []);


  const getIndianSummerGinHomeData = async () => {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: "https://isg-cms.stageoakum.in/home"
    }).catch(err => {
      console.log("err", err);
      setLoading(false);
    });

    if (response && response.status === 200) {
      setIndianSummerGinData(response?.data?.blocks);
      setLoading(false);
    } else {
      console.log("err", response?.error);
      setLoading(false);
    }
  }

  return (
    <>
      {
        !loading ?

          <div>
            <Head>
              <title>Indian Summer</title>
              <meta name="description" content={website.description} />
            </Head>

            <div className={styles.topSection}>
              <ImageSlider imageSliderData={indianSummerGinData[0]} />
              <div className={styles.infoBlockSection1}>
                <InfoBlock
                  titleArray={[
                    {
                      title: `${indianSummerGinData[1]?.header_part1}`,
                      titleColor: "#6A83DB",
                    },
                    {
                      title: `${indianSummerGinData[1]?.header_part2}`,
                      titleColor: "#FBBB7F",
                    },
                  ]}
                  description={indianSummerGinData[1]?.content}
                />
              </div>
            </div>
            <Banner2 banner2Data={indianSummerGinData[2]} />

            <div className={classNames(styles.ourStory, "mt-[108px] mb-[108px]")}>
              <InfoBlock
                title={indianSummerGinData[3]?.header_part1}
                titleColor="#6A83DB"
                description={indianSummerGinData[3]?.content}
              />
            </div>


            <FullHeightSection1 fullHeight1Data={indianSummerGinData[4]} />
            <FullHeightSection2 fullHeight2Data={indianSummerGinData[5]} />

            <HomeAnimation />

            <OurServes ourServesData={indianSummerGinData[6]} />

            <HowItsMade howItMadeData={indianSummerGinData[7]} />
            <SummerStories summerStoriesData={indianSummerGinData[8]} />

            <VideoSlider videoSliderData={indianSummerGinData[9]} summerBeginData={indianSummerGinData[10]} />
            <Footer />
          </div>
          :
          <Loader />
      }
    </>
  );
}

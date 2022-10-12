import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Slider from "infinite-react-carousel";
import Section from "@/components/layout/content/section";
import Image from "next/image";
import styles from "./home/summer-stories.module.css";
import classnames from "classnames";
import AwesomeSlider from "react-awesome-slider";
import AwesomeStyle from "react-awesome-slider/dist/styles.css";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function VideoSlider({ videoSliderData, summerBeginData }) {
  const renderImage = () => {
    return (
      <div className={classnames(styles.vectorBg6)}>
        {/* <div className={styles.vectorBg6}>
          <svg
            width="1741"
            height="386"
            viewBox="0 0 1741 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M201.606 0V210.925C199.106 226.828 192.514 258.634 136.5 258.634C80.4858 258.634 125.087 258.634 81.0762 258.634C55.2363 261.424 6.50002 264 6.5 314.5C6.49998 371.556 56.9034 380 81.0762 380H1749"
              stroke="#FFA101"
              strokeOpacity="0.12"
              strokeWidth="12"
            />
          </svg>
        </div> */}


        <AwesomeSlider
          buttons={false}
          organicArrows={false}
          fillParent={false}
          className={classnames(styles.awssId_section)}
        >
          {videoSliderData?.slides.map((item, index) => (
            <div
              key={index}
              className={classnames(styles.awssId_section_innder_div)}
              style={{
                backgroundColor: "#F7F6FF",
                paddingTop: "3%",
                paddingBottom: "0%",
              }}
            >
              <Section>
                <div className={classnames("flex", styles.videoslider)}>
                  <div
                    className={classnames("col-lg-5", styles.videosliderInnerDiv)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    <h2 className={styles.experts_mobile}>Hear from the experts</h2>
                    <p className={styles.vidtxt1}>
                      <q>
                        {item?.testimonial}
                      </q>
                    </p>
                    <p className={styles.vidtxt2}>
                      {item?.customer}
                    </p>
                  </div>
                  <div className={classnames("col-lg-7", styles.videoSliderImgDiv, styles.desktopImg)}>
                    <h2 className={styles.experts}>Hear from the experts</h2>
                    <img src={item?.image?.url} alt="bear" width={1046} height={645} />
                  </div>
                  <div className={classnames("col-lg-7", styles.videoSliderImgDiv, styles.mobileImg)}>
                    <h2 className={styles.experts}>Hear from the experts</h2>
                    <img src={item?.image?.url} alt="bear" width={640} height={670} />
                  </div>
                </div>
              </Section>
            </div>
          ))}
        </AwesomeSlider>
        {/* <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          dots={{ background: "black" }}
        >
          {images.map((im, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#F7F6FF",
                paddingTop: "4%",
                paddingBottom: "4%",
              }}
            >
              <Section>
                <div className={classnames("flex",styles.videoslider)}>
                  <div
                    className="col-md-5"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",

                      textAlign: "left",
                    }}
                  >
                    <p className={styles.vidtxt1}>
                   <q>

                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                   </q>
                      
                    </p>
                    <p className={styles.vidtxt2}>
                      - Dolor sit amet consectetur dolor sit amet
                    </p>
                  </div>
                  <div className="col-md-7">
                    <h2 className={styles.experts}>Hear from the experts</h2>
                    <Image src={im.src} alt="bear" width={1046} height={645} />
                  </div>
                </div>
              </Section>
            </div>
          ))}
        </Carousel> */}

      </div>
    );
  };
  return (
    <div>
      {renderImage()}
      <div style={{ marginTop: 130, marginBottom: 158 }} className={classnames(styles.summery_begin_div)}>
        <div className="flex items-center justify-center">
          <hr className="horizontalLine1" />
          <Image
            className="link"
            src={"/" + summerBeginData?.header_image?.name}
            alt="Logo"
            width={314}
            height={45}
          />
          <hr className="horizontalLine1" />
        </div>
        <h3
          style={{
            marginTop: 60,
            color: "#5E70B0",
            fontFamily: "Bodoni Moda",
            fontSize: "36px",
            fontWeight: "400",
            lineHeight: "47px",
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
          className={classnames(styles.summery_begin_Sub_title)}
        >
          {summerBeginData?.header}
        </h3>
      </div>
      {/* <div className={styles.vectorBg7}>
        <svg
          viewBox="0 0 1920 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-19 6H1934"
            stroke="#FFA101"
            strokeOpacity="0.12"
            strokeWidth="12"
          />
        </svg>
      </div> */}
    </div>
    // <div>

    //   <Carousel showStatus={false} showThumbs={false} showArrows={false}>
    //     {images.map((im, index) => (
    //         <div key={index} className='videoDiv'>
    //           <div className="flex flex-col justify-center items-center">
    //             <p className='vidtxt1'><q>Lorem ipsum dolor sit amet  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</q></p>
    //             <p className='vidtxt2'>- Dolor sit amet  consecteturdolor sit amet</p>
    //           </div>
    //           <div>
    //             <Image src={im.src} alt='bear' width={1046} height={645} />
    //             {/* <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
    //             frameborder='0'
    //             allow='autoplay; encrypted-media'
    //             allowfullscreen
    //             title='video'
    //             style={{ width: '100% !important', height: '645px' }}
    //           /> */}
    //           </div>
    //         </div>
    //     ))}
    //   </Carousel>

    //   <div style={{ marginTop: 164,marginBottom: 158 }} >
    //     <div className="flex items-center justify-center">
    //       <hr className='horizontalLine1' />
    //       <Image className='link' src="/Logo2.png" alt="Logo" width={314} height={45} />
    //       <hr className='horizontalLine1' />
    //     </div>
    //     <h3 className='title2' style={{marginTop:25}}>Let the summer <br />begin!</h3>
    //   </div>

    // </div>
  );
}

export default VideoSlider;

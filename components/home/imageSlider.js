import { useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Section from '../layout/content/section';
import styles from './imageSlider.module.css';

function ImageSlider({ imageSliderData }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const images = [
    { src: "/img1.png", src1: "/img1_mobile.png" },
    { src: "/img2.png", src1: "/img2.png" },
    { src: "/img3.png", src1: "/img3.png" },
    { src: "/img4.png", src1: "/img4.png" },
  ];

  // 2.5934
  return (
    <Section>
      <div className={classnames(styles.sliderWrapper, 'relative')}>
        <Carousel activeIndex={index} indicators={false} onSelect={handleSelect} interval={null}
          prevIcon={<MdArrowBackIosNew size={60} />}
          nextIcon={<MdArrowForwardIos size={60} />}
        >
          {imageSliderData?.slides.map((im, index) => (
            <Carousel.Item key={index}>
              <div className={classnames(styles.slide, styles.sliderDesktopImg)}>
                <img className={["d-block w-100", styles.banner_img]}
                  src={im?.slide?.url}
                  alt={`img${index}`}
                />
              </div>
              <div className={classnames(styles.slide, styles.sliderMobileImg)}>
                <img className={["d-block w-100", styles.banner_img]}
                  src={im?.slide?.url}
                  alt={`img${index}`}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={classnames(['absolute left-0 right-0 top-0 md:bottom-0 flex justify-center place-items-end', styles.centerBottleDiv])}>
          <div className={styles.centerBottleImgWrapper}>
            <img src={imageSliderData?.center_image?.image?.url} alt='banner-bottle' width={292} height={622} />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ImageSlider

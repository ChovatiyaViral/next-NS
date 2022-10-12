import Head from 'next/head';
import React from 'react';
import OurServes3 from './saffronInfusedOurServes/saffron-infused-our-serves';
import Suggestion from './suggestion/Suggestion';
import DetailsSection from './detailsSection/details-section';
import Footer from './productDetailsFooter/product-details-footer';
import styles from "../../styles/details-page.module.css";
import FlavourWheel from '@/components/commonComponents/flavourWheel/flavourWheel';
import website from 'website';
import TastingNotes from '@/components/commonComponents/tastingNotes/tasting-notes';
import Subscribe from './subscribe/subscribe';

const BottleDetailsPage = ({ data, colorDetails }) => {
    return (
        <div>
            <Head>
                <title>Indian Summer</title>
                <meta name="description" content={website.description} />
            </Head>

            <DetailsSection
                containerStyle={styles.topSection}
                detailData={data}
                lineGradientColor={colorDetails.lineGradientColor}
                textColor={colorDetails.textColor}
            />
            <TastingNotes testingNotingData={data?.blocks && data?.blocks.length ? data?.blocks[0] : null} colorDetails={colorDetails} />
            <FlavourWheel flavourWheelData={data?.blocks && data?.blocks.length ? data?.blocks[1] : null} colorDetails={colorDetails} slug={data?.slug} />
            <OurServes3
                tagline="FROM THE FINEST"
                taglineColor="#6A83DB"
                hideButton={true}
                colorDetails={colorDetails}
                ourServesData={data?.blocks && data?.blocks.length ? data?.blocks[2] : null}
            />
            <Suggestion suggestionData={data?.blocks && data?.blocks.length ? data?.blocks[3] : null} colorDetails={colorDetails} />
            <Subscribe
                colorDetails={colorDetails}
                subscribeData={data?.blocks && data?.blocks.length ? data?.blocks[4] : null}
            />

            <Footer
                bgColor={colorDetails.footerBgColor}
                lineColor="#FFFFFF"
                textColor="#B8B8B8"
                placeholderColor="border"
                footerTextColor={colorDetails.footerBgColor}
                //  footerLogo="/saffron_infused_footer_logo.png"
                footerborder="1px solid #6A83DB"
                socialMediaBorderColor={colorDetails.footerBgColor}
            />
        </div>
    )
}


export default BottleDetailsPage
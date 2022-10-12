// import Head from "next/head";
// import website from "website";

// import OurServes from "@/components/home/casked-strength-our-serves";

// import TestingNotes from "@/components/product-details/casked-strength-tasting-notes";
// import Subscribe from "@/components/product-details/casked-strength-subscribe";

// import styles from "../styles/details-page.module.css";
// import FlavourWheel from "@/components/layout/content/casked-strength-flavourWheel";
// import Footer from "@/components/product-details/casked-strength-footer";
// import Suggestion from "@/components/product-details/casked-strength-suggestion";
// import DetailsSection from "@/components/product-details/casked-strength-details-section";
// import DetailsSection from '@/components/commonComponents/details-section';
import axios from "axios";
import React from "react";
import BottleDetailsPage from "@/components/commonComponents/bottle-details-page";
import Loader from "@/components/commonComponents/loader/Loader";

export default function Home() {
  const [caskedStrengthData, setCaskedStrengthData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getCaskedStrengthData();
  }, []);


  const getCaskedStrengthData = async () => {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: "https://isg-cms.stageoakum.in/products/casked-strength"
    }).catch(err => {
      console.log("err", err);
      setLoading(false);
    });

    if (response && response.status === 200) {
      setCaskedStrengthData(response?.data);
      setLoading(false);
    } else {
      console.log("err", response?.error);
      setLoading(false);
    }
  }

  const colorDetails = {
    lineGradientColor: 'linear-gradient(76.54deg, #F1DEB8 -0.16%, #FCF9EC 98.8%)',
    textColor: "#EAB755",
    radarChartColor: '#EAB75566',
    radarChartBorderColor: 'rgba(106, 131, 219, 0.4)',
    radarChartBgColor: 'linear-gradient(163.45deg, #FCF9EC 8.84%, #F2E2BF 132.51%)',
    footerBgColor: "#554736",
    suggetionTextColor: "#6A83DB",
    sectionName: "caskedStrength"
  }

  return (
    <>
      {
        !loading ?
          <BottleDetailsPage data={caskedStrengthData} colorDetails={colorDetails} />
          :
          <Loader />
      }
      {/* <div>
       <Head>
         <title>Indian Summer</title>
         <meta name="description" content={website.description} />
       </Head>

       <DetailsSection
         containerStyle={styles.topSection2}
         detailData={caskedStrengthData}
         lineGradientColor='linear-gradient(76.54deg, #F1DEB8 -0.16%, #FCF9EC 98.8%)'
         textColor="#EAB755"
       />

       <TestingNotes testingNotingData={caskedStrengthData?.blocks && caskedStrengthData?.blocks.length ? caskedStrengthData?.blocks[0] : null} />

       <FlavourWheel flavourWheelData={caskedStrengthData?.blocks && caskedStrengthData?.blocks.length ? caskedStrengthData?.blocks[1] : null} />
       <OurServes
         tagline="FROM THE FINEST"
         taglineColor="#EAB755"
         hideButton={true}
       />
       <Suggestion suggestionData={caskedStrengthData?.blocks && caskedStrengthData?.blocks.length ? caskedStrengthData?.blocks[2] : null} />
       <Subscribe />

       <Footer
         bgColor="#554736"
         lineColor="#FFFFFF"
         textColor="#B8B8B8"
         placeholderColor="border"
         footerTextColor="#554A36"
          footerLogo="/casked_strength_footer_logo.png"
         footerborder="1px solid #554A36"
       />
    </div> * /}
       {/* <img src='/assets/images/home_full_page.jpg' /> */}
    </>
  );
}

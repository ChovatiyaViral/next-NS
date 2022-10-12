// import Head from 'next/head'
// import website from 'website'

// // import OurServes3 from '@/components/home/saffron-infused-our-serves';
// import DetailsSection from '@/components/commonComponents/details-section';
// import TastingNotes from '@/components/product-details/tasting-notes';
// import Subscribe from '@/components/product-details/subscribe';

// import styles from '../styles/details-page.module.css';
// import FlavourWheel from '@/components/layout/content/flavourWheel';
// import Footer from '@/components/product-details/product-details-footer'
// import Suggestion from '@/components/product-details/Suggestion';
// import OurServes3 from '@/components/home/saffron-infused-our-serves';
import React from 'react';
import axios from 'axios';
import BottleDetailsPage from '@/components/commonComponents/bottle-details-page';
import Loader from '@/components/commonComponents/loader/Loader';

export default function Home() {

  const [saffronInfusedData, setSaffronInfusedData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getSaffronInfusedData()
  }, []);


  const getSaffronInfusedData = async () => {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: "https://isg-cms.stageoakum.in/products/saffron-infused"
    }).catch(err => {
      console.log("err", err);
      setLoading(false);
    });

    if (response && response.status === 200) {
      setSaffronInfusedData(response?.data);
      setLoading(false);
    } else {
      console.log("err", response?.error);
      setLoading(false);
    }
  }

  const colorDetails = {
    lineGradientColor: 'linear-gradient(76.54deg, #FFF7EA -0.16%, #FAE7FA 98.8%)',
    textColor: "#6A83DB",
    radarChartColor: 'rgba(106, 131, 219, 0.4)',
    radarChartBorderColor: 'rgba(106, 131, 219, 0.4)',
    radarChartBgColor: 'linear-gradient(163.45deg, #FAE7FA 8.84%, #FFF7EA 132.51%)',
    footerBgColor: "#363755",
    suggetionTextColor: "#EAB755",
    sectionName: "saffronInfused"
  }

  return (
    <>
      {
        !loading ?
          <BottleDetailsPage data={saffronInfusedData} colorDetails={colorDetails} />
          : <Loader />
      }
      {/* <div>
      <Head>
        <title>Indian Summer</title>
        <meta name="description" content={website.description} />
      </Head>

      <DetailsSection
        containerStyle={styles.topSection}
        detailData={saffronInfusedData}
        lineGradientColor='linear-gradient(76.54deg, #FFF7EA -0.16%, #FAE7FA 98.8%)'
        textColor="#6A83DB"
      />
      <TastingNotes />
      <FlavourWheel />
      <OurServes3
        tagline="FROM THE FINEST"
        taglineColor="#6A83DB"
        hideButton={true}
      />
      <Suggestion />
      <Subscribe />

      <Footer
        bgColor="#363755"
        lineColor="#FFFFFF"
        textColor="#B8B8B8"
        placeholderColor="border"
        footerTextColor="#6A83DB"
        //  footerLogo="/saffron_infused_footer_logo.png"
        footerborder="1px solid #6A83DB"
      />
    </div> */}
      {/* <img src='/assets/images/home_full_page.jpg' /> */}
    </>
  );
}
